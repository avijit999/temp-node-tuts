const { readFile, writeFile } = require('fs');

/** 
const firstFile = await readFileAsyncFunc('./content/first.txt','utf8');
const secondFile = await readFileAsyncFunc('./content/second.txt','utf8');
const thirdFile = await writeAsyncFunc('./content/result-async.txt',`This is the resultant text ${firstFile} ${secondFile}`);
**/

async function readFileAsyncFunc(path,encoding){
    readFile(path,encoding,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        return result;            
    })
}

async function writeAsyncFunc(path,resultant){
        writeFile(path,resultant,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        });
}

const readWriteAsync = async () => {
    try{
    const first = await readFileAsyncFunc('./content/first.txt','utf8');
    const second = await readFileAsyncFunc('./content/second.txt','utf8');
    const thirdFile = await writeAsyncFunc('./content/result-async2.txt', `This is the resultant text: ${first} ${second}`);
    const third = await readFileAsyncFunc('./content/result-async2.txt','utf8');
    return thirdFile;
    }catch(error){
        console.log(error);
    }
};


readWriteAsync().then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})