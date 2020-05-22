<template>
  <el-form ref="postForm" :model="postForm">
    <sticky :class-name="'sub-navbar'">
      <el-button v-if="!isEdit" @click="showGuide">显示帮助</el-button>
      <el-button 
        v-loading="loading" 
        @click="submitForm"
        type="success"
      >
        {{ isEdit ? '编辑电子书' : '新增电子书'}}
      </el-button>
    </sticky>
    <div class="detail-container">
      <el-row>
        <warning/>
        <el-col :span="24">
          <!-- 上传表单控件的具体样式 -->
          <EbookUpload 
            :file-list="fileList" 
            :disabled="isEdit"
            @onSuccess="onUploadSuccess"
            @onRemove="onUploadRemove"
            @onError="onUploadError"
          ></EbookUpload>
        </el-col>
        <el-col :span="24">
          <el-form-item prop="title">
            <MdInput v-model="postForm.title" :maxlength="100" name="name" required >
              书名
            </MdInput>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="作者：" :label-width="labelWidth">
                <el-input v-model="postForm.author" placeholder="作者" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="出版社：" :label-width="labelWidth">
                <el-input v-model="postForm.publisher" placeholder="出版社" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="语言：" :label-width="labelWidth">
                <el-input v-model="postForm.language" placeholder="语言" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="根文件：" :label-width="labelWidth">
                <el-input v-model="postForm.rootFile" placeholder="根文件" disabled />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="文件路径：" :label-width="labelWidth">
                <el-input v-model="postForm.filePath" placeholder="文件路径" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="解压路径：" :label-width="labelWidth">
                <el-input v-model="postForm.unzipPath" placeholder="解压路径" disabled />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="封面路径：" :label-width="labelWidth">
                <el-input v-model="postForm.coverPath" placeholder="封面路径" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="文件名称：" :label-width="labelWidth">
                <el-input v-model="postForm.fileName" placeholder="文件名称" disabled />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :span="24">
            <el-form-item label="封面：" :label-width="labelWidth">
              <a v-if="postForm.cover" :href="postForm.cover" target="_blank">
                <img :src="postForm.cover" class="preview-img" />
              </a>
              <span v-else>无</span>
            </el-form-item>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="目录：" :label-width="labelWidth">
                <div>
                  <el-tree v-if="postForm.contents && postForm.contents.length > 0" class="contents-wrapper">
                    <!-- 目录内容 -->

                  </el-tree>
                  <span v-else>无</span>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </el-form>
</template>

<script>
import Sticky from '@/components/Sticky/index'
import Warning from './Warning'
import EbookUpload from '@/components/EbookUpload/index'
import MdInput from '@/components/MDinput/index'
export default {
  props: {
    isEdit: Boolean
  },
  components: {Sticky, Warning, EbookUpload, MdInput},
  data() {
    return {
      loading: false,
      postForm: {
        status: '',
        title: '',
        author: '',
        publisher: '',
        language: '',
        rootFile: '',
        filePath: '',
        unzipPath: '',
        coverPath: '',
        fileName: '',
        cover: ''
      },
      fileList: [],
      labelWidth: '120px'
    }
  },
  methods: {
    showGuide() {
      console.log('showGuide')
    },
    submitForm() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    onUploadSuccess(e) {
      console.log('onUploadSuccess', e)
    },
    onUploadRemove(e) {
      console.log('onUploadRemove', e)
    },
    onUploadError(e) {
      console.log('onUploadError', e)
    }
  }
}
</script>

<style lang='scss' scoped>
  .detail-container{
    padding: 40px 50px 20px;
    .preview-img{
      width: 200px;
    }
  }
</style>
