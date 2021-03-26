const app = Vue.createApp({ 
    data: function () {
      return {
        gender: "",
        name: "",
        bday: "",
        bmonth: "",
        byear: "",
        color1: false,
        color2: false,
        color3: false,
        color4: false,
        comment: "",
      };
    },
    methods: {
      requirement() {
        if(this.color1 === false && this.color2 === false && this.color3 === false && this.color4 === false){
          alert("Bitte füllen Sie alle notwendigen Felder aus. Sie müssen mindestens eine Farbauswahl treffen.");
        }

      }
    }
});