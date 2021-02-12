<template>
  <el-dialog
    :title="`${ isEdit ? 'Edit' : 'Add New' } Product`"
    :visible.sync="productModalState"
    width="30%"
    :before-close="handleClose"
  >
    <el-form
      ref="newProduct"
      label-width="120px"
      :model="newProduct"
      :rules="rules"
    >
      <el-form-item label="Name" prop="name">
        <el-input v-model="newProduct.name"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input type="textarea" v-model="newProduct.description"></el-input>
      </el-form-item>
      <el-form-item label="Price" prop="price">
        <el-input v-model="newProduct.price"></el-input>
      </el-form-item>
      <el-form-item label="Off Sale">
        <el-input v-model="newProduct.off_sale"></el-input>
      </el-form-item>
      <el-form-item label="Stock Count">
        <el-input v-model="newProduct.stock_count"></el-input>
      </el-form-item>
      <el-form-item label="Product Image">
        <input type="file" class="form-control-file" id="image" name="image" @change="onFileChange">
        <br>
        <small id="fileHelp" class="form-text text-muted">Product Image preview will show below.</small>
        <div id="preview">
          <img style="width: 150px;" v-if="newProduct.image" :src="newProduct.image" :alt="newProduct.image" />
        </div>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('close')">Cancel</el-button>
      <el-button
        type="primary"
        :disabled="!newProduct.image"
        @click="saveProduct"
        :loading="isSaving"
      >
        {{ isEdit ? 'Update Product' : 'Add Product' }}
      </el-button>
    </span>
  </el-dialog>
</template>

<script>

export default {
  name: 'AddEditProductModal',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    productModalState: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    data: {
      handler (val) {
        if (val) {
          this.isEdit = true
          // this.imagePreview = `${this.axios.defaults.baseURL}/product_images/${val.image}`

          // this code applied to make a duplicate data to prevent changing the original data from table when editing
          this.newProduct = JSON.parse(JSON.stringify(val))
          this.newProduct.image = `${this.axios.defaults.baseURL}/product_images/${val.image}`
        } else {
          this.isEdit = false
          this.resetFields()
        }
      },
      immediate: true
    }
  },
  data () {
    return {
      isEdit: false,
      isSaving: false,
      newProduct: {
        name: null,
        description: null,
        price: null,
        off_sale: 0,
        stock_count: 0,
        wish_count: 0,
        image: null
      },
      rules: {
        name: [
          { required: true, message: 'Please input the product name.', trigger: 'blur' }
        ],
        price: [
          { required: true, message: 'Please input the product price.', trigger: 'blur' }
        ]
      },
      imagePreview: null
    }
  },
  methods: {
    resetFields () {
      this.newProduct = {
        name: null,
        description: null,
        price: null,
        off_sale: 0,
        stock_count: 0,
        wish_count: 0,
        image: null
      }
    },
    onFileChange (e) {
      const file = e.target.files || e.dataTransfer.files
      if (!file.length) return
      this.createImage(file[0])
    },
    createImage (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.newProduct.image = e.target.result
        this.imagePreview = e.target.result
      }
      reader.readAsDataURL(file)
    },
    finalizeRequest (message) {
      this.isSaving = false
      this.$emit('close')
      this.$message({
        message,
        type: 'success'
      })
    },
    saveProduct () {
      this.$refs.newProduct.validate((valid) => {
        if (valid) {
          this.isSaving = true
          if (!this.isEdit) {
            this.axios.post('/api/create-product', this.newProduct).then(({ data }) => {
              const product = {
                action: 'create',
                data: data.product
              }
              this.$emit('update', product)
              this.finalizeRequest(data.message)
            })
          } else {
            this.axios.put(`/api/update-product/${this.newProduct.id}`, this.newProduct).then(({ data }) => {
              const product = {
                action: 'update',
                data: data.product
              }
              this.$emit('update', product)
              this.finalizeRequest(data.message)
            })
          }
        } else {
          return false
        }
      })
    },
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>
