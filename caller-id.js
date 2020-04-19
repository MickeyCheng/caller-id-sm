window.onload = function(){
    hideErrorNameSearch();
    disableOptumSearch();
    disableEmailSearch();
    disableCreateCaller();
}
    
    
function hideErrorNameSearch(){
    document.getElementById('error-fname').style.display = "none";
    document.getElementById('error-lname').style.display = "none";
}

function disableOptumSearch(){
    document.getElementById('text-optumid').disabled = true;
    document.getElementById('btn-optumsearch').disabled = true;
}

function disableEmailSearch(){
    document.getElementById('text-email').disabled = true;
    document.getElementById('btn-emailsearch').disabled = true;
}

function disableCreateCaller(){
    document.getElementById('btn-create-new-caller').disabled = true;
}

function btn_namesearch(){
    hideErrorNameSearch();
        var getFirstName = document.getElementById('text-firstname').value.length;
        var getLastName = document.getElementById('text-lastname').value.length;
            if (getFirstName <2 ){
                document.getElementById('error-fname').style.display = "block";
            }
            if (getLastName <1 ){
                document.getElementById('error-lname').style.display = "block";
            }
            if (getFirstName >= 2 && getLastName >= 1){
                document.getElementById('text-optumid').disabled = false;
                document.getElementById('btn-optumsearch').disabled = false;                
            }
}

function btn_optumsearch(){
    document.getElementById('text-email').disabled = false;
    document.getElementById('btn-emailsearch').disabled = false;
}


/*$(function(){ 
    hideErrorNameSearch();
    disableOptumSearch();
    
    $('#btn-namesearch').click(function(){
        hideErrorNameSearch();
        var getFirstName = $('#text-firstname').val().length;
        var getLastName = $('#text-lastname').val().length;
        if (getFirstName < 2 || getLastName <1){
            if(getFirstName<2){
                $('#error-fname').show();
            };
            if(getLastName<1){
                $('#error-lname').show();
            };
        }
    });
    
        
});

*/