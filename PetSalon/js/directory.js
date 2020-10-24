

function display(aPet){
    // create the vars
    // *delete* var pets=salon.pets;
    // *deletconst petSection=document.getElementById("pets");
    var text="";
    var dogIcon=`<i class="fas fa-dog"></i>`;
    var catIcon=`<i class="fas fa-cat"></i>`;
    var birdIcon=`<i class="fas fa-crow"></i>`;

    
    //travel the salon.pets array

    //*delete*for(var i=0;i<pets.length;i++){
        
        //display the icon of the type of pet
        //hit=if

        if(aPet.type==="Dog"){
            icon=dogIcon;
        }else if(aPet.type==="Cat"){
            icon=catIcon;
        }else if(aPet.type==="Bird"){
            icon=birdIcon;
        }else{
            icon=`<i class="fas fa-question-circle"></i>`;
        }

        // *delete* if(pets[i]==="Dog"){
            icon=dogIcon;
        }
        //create the HTML text

        text+=`
        <div class="pet">
            ${icon}
            <h2> Appointment: ${aPet}.appointment}</h2>
            <p> Name: ${aPet.name}</p>
            <p> Age: ${aPet.age} </p>
            <p> Genger: ${aPet.gender} </p>
            <p> Type: ${aPet.type} </p>
            <p> Breed: ${aPet.breed} </p>
            <p> Service: ${aPet.service} </p>
            <p> Price: ${aPet.price}</p>
            <p> Payment: ${aPet.paymentMethod}</p>
            <p> ownerName: ${aPet.ownersName} </p>
            <p> contactPhone: ${aPet.contactPhone} </p>
            </div>
        `;
        $('#pets').append(text);
    

    
    


        
//use the display function 

display();

// Extra HW
