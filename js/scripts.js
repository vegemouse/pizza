  function Pizza(size, crust, cheese, veggieToppings, meatToppings, delivery, price) {
    this.size = size;
    this.crust = crust;
    this.cheese = cheese;
    this.veggieToppings = veggieToppings;
    this.meatToppings = meatToppings;
    this.delivery = delivery;
    this.price = 0;
  }

  var createPizza = function(size, crust, cheese, veggieToppings, meatToppings, delivery, price) {
    var newPizza = new Pizza(size, crust, cheese, veggieToppings, meatToppings, delivery, price);
    return newPizza;
  }

  Pizza.prototype.calculatePrice = function() {
    if (this.size === "Large") {
      this.price += 12;
    } else if (this.size === "Medium") {
      this.price += 10;
    } else if (this.size === "Small") {
      this.price += 8;
    }
    if (this.crust === "Gluten Free") {
      this.price += 2;
    }
    if (this.cheese === "Vegan Daya Cheese") {
      this.price += 2;
    }
    for (var i = 0; i < this.veggieToppings.length; i++) {
      this.price += 0.5;
    }
    for (var i = 0; i < this.meatToppings.length; i++) {
      this.price += 1;
    }
    if (this.delivery === "Delivery") {
      this.price += 3;
    }
    return this.price;
  }

  $(function() {
    $("#order-form").submit(function(event) {
      event.preventDefault();
      var inputtedSize = $("#size").val();
      var inputtedCrust = $("#crust").val();
      var inputtedCheese = $("#cheese").val();
      var inputtedVeggieToppings = [];
      $("input:checkbox[name=veggieToppings]:checked").each(function() {
        inputtedVeggieToppings.push($(this).val());
      });
      var inputtedMeatToppings = [];
      $("input:checkbox[name=meatToppings]:checked").each(function() {
        inputtedMeatToppings.push($(this).val());
      });
      var inputtedDelivery = $("input:radio[name=delivery]:checked").val();
      var yourPizza = createPizza(inputtedSize, inputtedCrust, inputtedCheese, inputtedVeggieToppings, inputtedMeatToppings, inputtedDelivery);
      var yourPrice = yourPizza.calculatePrice().toFixed(2);
      $(".size").html(inputtedSize);
      $(".crust").html(inputtedCrust);
      $(".cheese").html(inputtedCheese);
      $(".veggieToppings").empty();
      for (var i = 0; i < yourPizza.veggieToppings.length; i++) {
        $(".veggieToppings").append("<li>" + yourPizza.veggieToppings[i] + "</li>");
      }
      $(".meatToppings").empty();
      for (var i = 0; i < yourPizza.meatToppings.length; i++) {
        $(".meatToppings").append("<li>" + yourPizza.meatToppings[i] + "</li>");
      }
      $(".delivery").html(inputtedDelivery.charAt(0).toUpperCase() + inputtedDelivery.slice(1));
      $(".price").html(yourPrice);
      $("#showOrder").fadeIn();
    })

    $("#orderButton").click(function() {
      
    })



  })
