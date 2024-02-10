function isDevMode(){
    return (process.env['NODE_ENV'] || 'dev' ) =='dev' 
    }

module.exports = {isDevMode}