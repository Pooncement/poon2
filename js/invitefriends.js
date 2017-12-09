

$( function() {
    var projects = [
      {
        label: "Poon",
        desc: "Poon",
        icon: "p10.png"
      },
      {
        label: "Aden",
        desc: "Aden",
        icon: "p1.png"
      },
      {
        label: "Grace",
        desc: "Grace",
        icon: "p11.png"
      },
      {
        label: "Sophia",
        desc: "Sophia",
        icon: "p3.png"
      },
      {
        label: "Olivia",
        desc: "Olivia",
        icon: "p4.png"
      },
      {
        label: "Emma",
        desc: "Emma",
        icon: "p5.png"
      },
      {
        label: "Jackson",
        desc: "Jackson",
        icon: "p2.png"
      },
      {
        label: "Liam",
        desc: "Liam",
        icon: "p12.png"
      },
      {
        label: "Noah",
        desc: "Noah",
        icon: "p9.png"
      },
       {
        label: "Teya",
        desc: "Teya",
        icon: "p8.png"
      },
      {
        label: "Jay",
        desc: "Jay",
        icon: "p6.png"
      },
      {
        label: "Jacob",
        desc: "Jacob",
        icon: "p7.png"
      }
    ];
 
    $( "#project" ).autocomplete({
      minLength: 0,
      source: projects,
      focus: function( event, ui ) {
        $( "#project" ).val( ui.item.label );
        return false;
      },
      select: function( event, ui ) {
        $( "#project" ).val( ui.item.label );
        $( "#project-id" ).val( ui.item.value );
        $( "#project-description" ).html( ui.item.desc );
        $( "#project-icon" ).attr( "src", "image/friend/" + ui.item.icon );
 
        return false;
      }
    })
    .autocomplete( "instance" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<div>" + item.label + "<br>" + item.desc +  "<br>" + item.icon +"</div>" )
        .appendTo( ul );
    };
  } );
