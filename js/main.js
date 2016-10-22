(function(){
    'use strict';
    angular.module("resumeApp",[])
    .controller('terminalController',['$scope', '$sce', function($scope, $sce) {

        $scope.array = [];
        $scope.dothis = function(){
            if ($scope.read.toLowerCase() == 'about') {
                $scope.array.push(['<p>I am very passionate about programming ,<br> '
                    +'I never abide at what I already know and I always try to learn new technologies that later I will apply in my projects .<br>'
                    +' I rejoice every time I meet people as enthusiastic and eager to learn new technology like me.</p>',$scope.read]);
                $scope.read = '';
            }else if ($scope.read.toLowerCase() == 'experience') {
                $scope.array.push(['<p>Junior PHP Developer<br>'+
                    '<i>Group Five Software</i> <br>'+
                    'March 2016 – Present (8 months)</p>',$scope.read]);
                $scope.read = '';
            }else if ($scope.read.toLowerCase() == "skills"){
                $scope.array.push(['<p>USING EVERY DAY</p><ul><li>PHP,</li><li>JavaScript,</li><li>Symfony,</li><li>AngularJs,</li><li>Jquery,</li><li>MySql,</li><li>Git,</li><li>Linux.</li></ul>'+
                    '<p>LEARNING</p><li>C#,</li><li>ASP.NET</li>',$scope.read]);
                $scope.read = '';
            }else if($scope.read.toLowerCase() == 'clear'){
                $scope.array = []
                $scope.array.push(['',$scope.read]);
                $scope.read = '';
            }else if($scope.read.toLowerCase() == ''){
                $scope.array.push(['',$scope.read]);
                $scope.read = '';
            }else if ($scope.read.toLowerCase() == 'education') {
                $scope.array.push(['<p>FSEGA - <i>Facultatea de Stiinte Economice si Gestiunea Afacerilor</i> // Universitatea Babes Bolyai //<i> Cluj-Napoca.</i></p> '+
                    '<p>INFORMATICA ECONOMICA -- <i>2016-2019</i></p>',$scope.read]);
                $scope.read = '';
            }else if ($scope.read.toLowerCase() == 'help') {
                $scope.array.push(['<p>Availble comands:</p> <ul><li>help</li><li>clear</li><li>about</li><li>experience</li><li>education</li><li>skills</li><li>contact</li></ul>',$scope.read]);
                $scope.read = '';
            }else if($scope.read.toLowerCase() == 'contact'){
                $scope.array.push(['<p>nr: <a href="tel:0736171593">0736-171-593</a></p><p>eMail: <a href="mailto:favianioel@yahoo.com">favianioel@yahoo.com</a></p> ',$scope.read]);
                $scope.read = '';
            }else {
                $scope.array.push(['<p>'+$scope.read+' : command not found.<br> Please enter an availble command <br> Run `help` for commands.</p>',$scope.read]);
                $scope.read = '';
            }
        };
        $scope.renderHtml = function(html_code)
        {
            return $sce.trustAsHtml(html_code);
        };

    }]);
})();
