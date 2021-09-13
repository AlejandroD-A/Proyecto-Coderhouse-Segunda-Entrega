const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      console.log(file)
      callback(null, 'uploads')
    },
    filename: function (req, file, callback) {
        const ext = file.mimetype.split('/').pop()
      callback(null, `${file.originalname}-${Date.now()}.${ext}`)
    }
  })
const upload = multer({ storage: storage })

module.exports = upload