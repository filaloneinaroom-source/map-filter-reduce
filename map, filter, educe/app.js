// const nums=[3,12,7,9]

// const mapsNum=nums.map((n, i, arr)=>n*2)
// console.log(mapsNum);

// const filterNums=nums.filter ((san )=>san>5)
// console.log(filterNums);

// const reduceNums=nums.reduce((n, total )=>n+total,0 )
// console.log(reduceNums);
const fruits=['banana', 'kiwi','orange', 'apple']

const apperFruts= fruits.map((fr)=>fr.charAt(0).toUpperCase()+fr.slice(1).toLocaleLowerCase )
console.log(apperFruts);

const minFruts=fruits.filter((fr)=>fr.length>5)
console.log(minFruts);

const letters=fruits.reduce ((total , fr )=>{
console.log(total,"total");
console.log(fr, fr.length);
 return total=fr.length 
},0)
console.log(letters);

const students =[
    {id:1 , name:'aidin', age:16 },
    {id:2 , name:'ainur', age:17},
    {id:3 , name:'abai', age:20},
]
const mature=students.filter ((stud)=>stud.age>18)
.reduce((total,st)=>total+st.age,0)
console.log(mature);

const studAge=students.reduce((total, student )=>student.age=total,0)
console.log(studAge);





