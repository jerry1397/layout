let box = document.getElementsByClassName("box");
let big_box = document.getElementsByClassName("big-box");
console.log(big_box);
let arr = [1,2,3,4,5,6,7,8];
arr.map((value,index)=>{

    big_box[0].innerHTML += `<div class="box">
    <img src="img1.png">
    <h1 class="P-name">Project Name</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia suscipit dolorum non ipsa perferendis quo, dolor rerum aspernatur eaque ad!</p>
</div>`; 
})