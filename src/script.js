
var listOfpost =
    [{id: 1, name: "ABC", desc: "Description about ABC" },
    { id: 2, name: "DEF", desc: "Description about DEF" },
    { id: 3, name: "GHI", desc: "Description about GHI" },
    { id: 4, name: "JKL", desc: "Description about JKL" }];
    var isUpdate = false;
    var selectedObject;
getAll = function () {
    var el = document.getElementById("list");
    var data = '';
    if (this.listOfpost.length > 0) {
        data += '<tr><td>S.NO</td><td>Post</td><td>Post Desscription</td> <td>Action</td></tr>';
        for (i = 0; i < this.listOfpost.length; i++) {
            data += '<tr>';
            data += '<td>' + parseInt(i +1) + '</td>';
            data += '<td>' + this.listOfpost[i].name + '</td>';
            data += '<td>' + this.listOfpost[i].desc + '</td>';
            data += '<td>  <button class="btn btn-primary" onClick="editItem(' + this.listOfpost[i].id + ')"> Edit</button> &nbsp;<button class="btn btn-danger" onClick="deleteItem(' + this.listOfpost[i].id + ')">Delete</button> </td>';
            data += '</tr>';
        }
    }

    return el.innerHTML = data;
};
function add() {
    if(document.getElementById("name").value.trim() && document.getElementById("des").value.trim()) {
        var obj = {
            name: document.getElementById("name").value,
            desc: document.getElementById("des").value,
            id: !this.isupdate ? listOfpost.length + 1  :  this.selectedObject.id
        };
        if(!this.isUpdate) {
            this.listOfpost.push(obj);
            alert(" Succefuly Added");
        }else {
            var index =  this.listOfpost.indexOf(selectedObject);
            this.listOfpost[index] = obj;
            alert(" Succefuly Updated");
            this.isUpdate = false;
        }
        clearForm();
        getAll();
    }
    else {
        alert("Please enter the Name and Description");
    }

};
function clearForm() {
    document.getElementById("name").value = null;
    document.getElementById("des").value = null;
    this.selectedObject = null;
    document.getElementById("submit").value="Submit"; 
}

function editItem(data) {
    this.listOfpost[data];
     this.selectedObject = this.listOfpost.filter(function(e) {
        return e.id == data;
      })[0];
    console.log(selectedObject);
    document.getElementById("name").value = selectedObject.name;
    document.getElementById("des").value = selectedObject.desc;
    document.getElementById("submit").value="Update"; 
    this.isUpdate = true;

}

function deleteItem(id) {
    this.listOfpost = this.listOfpost.filter(item => item.id != id);
    getAll();
    alert("Deleted  Succefuly");
}
getAll();