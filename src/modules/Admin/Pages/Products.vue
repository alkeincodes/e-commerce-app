<template>
  <div class="admin-products">
    <div class="product-actions">
      <el-button type="primary" @click="addProduct">Add Product</el-button>
      <add-edit-product-modal
        :product-modal-state="productModalState"
        :data="selectedProduct"
        @close="productModalState = false"
        @update="onDataUpdate"
      />
    </div>
    <el-table
      :data="allProducts"
      style="width: 100%">
      <el-table-column
        label="Name"
        width="180"
        prop="name"
      />
      <el-table-column label="Image">
        <template slot-scope="props">
          <!-- <img style="width: 150px;" :src="`${axios.defaults.baseURL}/product_images/${props.row.image}`" :alt="props.row.image"> -->
          <img style="width: 150px;" :src="`${axios.defaults.baseURL}/product_images/${props.row.image}`" :alt="props.row.image">
        </template>
      </el-table-column>
      <el-table-column
        label="Original Price"
        width="180">
        <template slot-scope="props">
          <span>P{{ parseInt(props.row.price).toFixed(2) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Off Sale"
        width="180">
        <template slot-scope="props">
          <span>{{ props.row.off_sale }}%</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Final Price"
        width="180"
      >
        <template slot-scope="props">
          <span>P{{ parseInt(props.row.price - (props.row.price * (props.row.off_sale / 100))).toFixed(2) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Stock Count"
        width="180"
        prop="stock_count"
      />
      <el-table-column
        label="Wish Count"
        width="180"
        prop="wish_count"
      />
      <el-table-column
        label="Actions">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            :loading="isDeleting"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import AddEditProductModal from '@/modules/Admin/components/modals/AddEditProductModal'

export default {
  name: 'AdminProducts',
  components: {
    AddEditProductModal
  },
  data () {
    return {
      productModalState: false,
      allProducts: [],
      selectedProduct: null,
      isDeleting: false
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.axios.get('/api/products').then(({ data }) => {
        this.allProducts = data
      })
    },
    handleEdit (index, row) {
      this.selectedProduct = row
      this.selectedIndex = index
      this.productModalState = !this.productModalState
    },
    handleDelete (index, row) {
      this.$confirm('This will permanently delete the product. Continue?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.isDeleting = true
        this.axios.delete(`/api/delete-product/${row.id}`).then(() => {
          this.allProducts.splice(index, 1)
          this.isDeleting = false
          this.$message({
            type: 'success',
            message: 'Product Deleted Successfully'
          })
        })
      })
    },
    addProduct () {
      this.selectedProduct = null
      this.productModalState = !this.productModalState
    },
    onDataUpdate (product) {
      switch (product.action) {
        case 'create':
          this.allProducts.unshift(product.data)
          break
        case 'update':
          this.allProducts = this.allProducts.map(({ id }) => {
            if (id === product.data.id) return product.data
          })
          break
      }
    }
  }
}
</script>
