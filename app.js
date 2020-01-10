new Vue({

  el: '#vue-app',
  data() {
    return {
      url: null,
      picture: null,
      imageData: null,
      uploadValue: 0,
      uploadStarted: false,
      uploadCompleted:false

    }
  },

  methods: {
    // method
    onFileChange(e) {
      const file = e.target.files[0];
      this.imageData = e.target.files[0];
      this.url = URL.createObjectURL(file)
    },

    removeThumbnail: function () {
      this.url = null;
      this.picture = null;
      this.uploadStarted = false;
      this.uploadCompleted = false;

      this.resetThumbailImage();
    },

    onUpload() {

      // upload started idication for progress
      this.uploadStarted = true;

      const storageRef = storage.ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`, snapshot => {
        this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('upload value', this.uploadValue);

      }, error => {
        console.log(error.message);
        // upload started idication for progress
        this.uploadStarted = false;
      },
        () => {
          this.uploadValue = 100;
          this.uploadCompleted = true;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
            console.log('picture', this.picture);
          });
        }
      );
    },

    resetThumbailImage: function(){
      this.$refs.thumbnailImageRef.value =  null;
    }

  },

  computed: {

  }



});