// model/fml.js
const AV = require('../libs/av-weapp-min.js');
class Fml extends AV.Object {
}
// Register object
AV.Object.register(Fml, 'Fml');

// Export object
module.exports = Fml;