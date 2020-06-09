
$(document).ready(() => {

    const showHomeComponents = () => {
        $('#idNavBar').show();
        $('#productContainer').show();
        $('#homeLeftSidebar').show();

        $('#arrowBack').hide();
        $('#checkoutContainer').hide();
        $('#signupContainer').hide();
        $('#signupLeftSidebar').hide();
        
        // $('.left-sidebar').hide();
        // $('.right-sidebar').hide();
    };

    const showSignUpComponent = () => {
        $('#idNavBar').hide();
        $('#productContainer').hide();
        $('#homeLeftSidebar').hide();

        $('#arrowBack').show();
        $('#signupContainer').show();
        $('#signupLeftSidebar').show();

    };

    const showCheckoutComponents = () => {
        $('#idNavBar').hide();
        $('#productContainer').hide();
        $('#homeLeftSidebar').hide();
        $('#signupContainer').hide();
        $('#signupLeftSidebar').hide();

        // $('#arrowBack').show();
        $('#checkoutContainer').show();
        // $('.left-sidebar').show();
        // $('.right-sidebar').show();
    };


    $('#arrowBack').on('click', function() {
        if ($('#signupContainer').is(':visible')) {
            showHomeComponents();

        } else if ($('#checkoutContainer').is(':visible')) {
            showSignUpComponent();
        }
        
    });

    $('.checkout-fab').on('click', function() {
        const productCard = $(this).parent().parent();
        const ratePlan = productCard.find('h4.card-title');
        const price = productCard.find('h1.p-card-price');
        const planFeatures = productCard.find('li.list-group-item');

        let listItems = [];
        
        $.each(planFeatures, function(i, v) {            
            listItems[i] = "<div class='list-group-item'>" +
                            "<div class='d-flex w-100 justify-content-between'>" +
                                "<h5 class='mb-1'>" + $(v).find('span').text() + "</h5>" +
                                $(v).children('i')[0].outerHTML +
                            "</div>" +
                            "<div class='my-1'>" + $(v).find('small').text() + "</div>" +
                            "</div>";
         });


        $('#idSelPlan').text(ratePlan.text());
        $('#idSelPlanPrice').text(price.text());
        $('#idSelPlanFeatures').html(listItems.join(''));

        // showCheckoutComponents();
        showSignUpComponent();
    });
    showHomeComponents();
});