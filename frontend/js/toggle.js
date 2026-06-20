var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "images":"../images/john.png"
    },
    {
        "name":"John Doe",
        "gender":"Female",
        "images":"../images/johndoe.png"
    }
]

var curId=0;
function toggle(){
    curId=(curId+1)%2;

    var user=users[curId];
    //image
    document.getElementById("user-img").src=user.images;
    //update name and gender
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;
    
}