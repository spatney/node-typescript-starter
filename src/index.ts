export function demo(){
    return new Promise((s)=>{
        s("hello, world");
    });
}

async function run(){
    console.log(await demo());
}

run();