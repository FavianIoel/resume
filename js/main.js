(function(){
    'use strict';
    //noinspection JSUnresolvedFunction
    angular.module("resumeApp",[])
        .directive('focusInput', function($timeout) {
      return {
        link: function(scope, element) {
          element.bind('click', function() {
            $timeout(function() {
              element.parent().parent().find('input')[0].focus();
          });
        });
      }
  };
}).controller('terminalController',['$scope', '$sce', function($scope, $sce) {

    var skills="";
    skills += "<p>Frameworks<\/p>";
    skills += "<ul>";
    skills += " <li>Symfony3<\/li>";
    skills += " <li>AngularJs<\/li>";
    skills += "<\/ul>";
    skills += "<p>Enviroments<\/p>";
    skills += "<ul>";
    skills += " <li>Linux<\/li>";
    skills += " <li>Windows<\/li>";
    skills += " <li>Cli<\/li>";
    skills += " <li>Lamp<\/li>";
    skills += "<\/ul>";
    skills += "<p>ProgrammingLanguages<\/p>";
    skills += "<ul>";
    skills += " <li>PHP<\/li>";
    skills += " <li>JavaScript<\/li>";
    skills += " <li>SQL<\/li>";
    skills += "<\/ul>";
    skills += "<p>Tools<\/p>";
    skills += "<ul>";
    skills += " <li>Git<\/li>";
    skills += " <li>bower<\/li>";
    skills += " <li>composer<\/li>";
    skills += " <li>npm<\/li>";
    skills += "<\/ul>";
    skills += "<p>Libraries<\/p>";
    skills += "<ul>";
    skills += " <li>Jquery<\/li>";
    skills += " <li>Materialize<\/li>";
    skills += " <li>Bootstrap<\/li>";
    skills += "<\/ul>";
    skills += "<p>Learning<\/p>";
    skills += "<ul>";
    skills += " <li>C#<\/li>";
    skills += " <li>ASP.NET<\/li>";
    skills += "<\/ul>";
    
    var about="";
    about += "<p>I can say I'm a very passionate guy ,<br>I love to learn new technology and share my knowledge with my friends.<br>I really think I still have more to learn and I think I will never abide at what I already know.<\/p><p>I want to join your team because I know it's a great place to enrich my knowledge, grow as a programmer and extend my area of expertize.<\/p>";


    var experience="";
    experience += "<p><strong>Group Five Software<\/strong><br>";
    experience += "                <i>Junior PHP Developer<\/i><br>";
    experience += "                March 2016 – Present (8 months)<\/p>";
    experience += "                <p>Group Five Software is a small company that develops big projects.<\/p>";
    experience += "                <p>Here I managed too work on a project from it's beginnings and I learned a lot from it .<\/p>";

    var education="";
    education += "<p><strong>FSEGA<\/strong> - Facultatea de Stiinte Economice si Gestiunea Afacerilor, <strong>Universitatea Babes Bolyai<\/strong>, Cluj- Napoca.<\/p>";
    education += "<p>Information Technologies and Economics , Bachelor (3)<\/p>";
    education += "<p>October 2016 - Present<\/p>";
    education += "";
    
    var help="";
    help += "<p>Availble comands:<\/p> <ul><li>help<\/li><li>clear<\/li><li>about<\/li><li>experience<\/li><li>education<\/li><li>skills<\/li><li>contact<\/li><li>download<\/li><\/ul>";
    help += "";
    
    var contact="";
    contact += "<p>nr: <a href=\"tel:0736171593\">0736-171-593<\/a><\/p><p>eMail: <a href=\"mailto:favianioel@yahoo.com\">favianioel@yahoo.com<\/a><\/p> ";
    
    var availble="";
    availble += " : command not found.<br> Please enter an availble command <br> Run `help` for commands.<\/p>";

    $scope.array = [];
    
    $scope.dothis = function(){
        if ($scope.read.toLowerCase() == 'about') {
            $scope.array.push([about,$scope.read]);
            $scope.read = '';
        }else if ($scope.read.toLowerCase() == 'experience') {
            $scope.array.push([experience,$scope.read]);
            $scope.read = '';
        }else if ($scope.read.toLowerCase() == "skills"){
            $scope.array.push([skills,$scope.read]);
            $scope.read = '';
        }else if($scope.read.toLowerCase() == 'clear'){
            $scope.array = [];
            $scope.array.push(['',$scope.read]);
            $scope.read = '';
        }else if($scope.read.toLowerCase() == ''){
            $scope.array.push(['',$scope.read]);
            $scope.read = '';
        }else if ($scope.read.toLowerCase() == 'education') {
            $scope.array.push([education,$scope.read]);
            $scope.read = '';
        }else if ($scope.read.toLowerCase() == 'help') {
            $scope.array.push([help,$scope.read]);
            $scope.read = '';
        }else if($scope.read.toLowerCase() == 'contact'){
            $scope.array.push([contact,$scope.read]);
            $scope.read = '';
        }
        else if($scope.read.toLowerCase() == 'download'){
            $scope.array.push(['',$scope.read]);
            window.open('ioel.pdf', '_blank', 'fullscreen=yes');
            $scope.read = '';
        }else {
            $scope.array.push(['<p>'+$scope.read+availble,$scope.read]);
            $scope.read = '';
        }
    };
    $scope.renderHtml = function(html_code)
    {
        //noinspection JSUnresolvedFunction
        return $sce.trustAsHtml(html_code);
    };
}]);
})();
