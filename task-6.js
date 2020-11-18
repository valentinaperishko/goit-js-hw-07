document.getElementById("validation-input").onblur = function() {
    console.log(this.value.length);
    
    if (this.getAttribute("data-length") === this.value.length) { 
      this.classList.remove("invalid");
      this.classList.add("valid");
      
    } 
    if (this.value.length !== this.getAttribute('data-length') && this.value.length !== 0) {
      this.classList.add("invalid");
    
    }
    if (this.value.length === 0) {
      this.classList.remove("valid");
      this.classList.remove("invalid");
    }
  };


