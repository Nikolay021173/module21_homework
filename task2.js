jsonStr = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`;

const data = JSON.parse(jsonStr);

const skills = [];

    for(let skill of data.skills) {
        skills.push(skill);
    }


const obj = {
    name: data.name,
    age: Number(data.age),
    skills: skills,
    salary: Number(data.salary),
}

console.log('obj', obj);