const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	
	const filewrite=await fs.writeFile(fileName,"hello",()=>{

	});
}
myFileWriter("file.txt");

const myFileReader = async (fileName) => {
	
	let readdata = await fs.readFile(fileName, "utf-8",()=>{

	})
	console.log(readdata);

}
myFileReader("file.txt");


const myFileUpdater = async (fileName, fileContent) => {
	await fs.appendFile(fileName,' World',()=>{

	})
}
myFileUpdater("file.txt");




const myFileDeleter = async (fileName) => {
	await fs.unlink(fileName)


}
myFileDeleter("file.txt");


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }