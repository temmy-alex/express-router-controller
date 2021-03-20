

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  public

const fs = require("fs")
const userData = fs.readFileSync('./data/users.json')
const dataUsers = JSON.parse(userData)
// const dataUsers1 = JSON.stringify(userData)

exports.getBootcamps = (req, res, next) => {
    // mas casey mana ini
    
    res.status(200).json(userData);
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`});
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  public
exports.createBootcamp = (req, res, next) => {
    console.log(req.body);
    const { username, email } = req.body
    const dataUpdated = dataUsers.push({ ID: dataUsers.length + 1, Username: username, Email: email})
    fs.writeFileSync('./data/users.json', JSON.stringify(dataUsers, null, 4))
    res.status(200).json({success: true, msg: 'Create new bootcamp', data: dataUpdated});
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps
// @access  public
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps
// @access  public
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`});
}

