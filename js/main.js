(function(){
    'use strict';
    angular.module("resumeApp",[])
.controller('terminalController',['$scope', function($scope) {

    $scope.array = [];
    $scope.dothis = function(){
        if ($scope.read == 'about') {
            $scope.array.push(['I am very passionate about programming , '
                +'I never abide at what I already know and I always try to learn new technologies that later I will apply in my projects .'
                +' I rejoice every time I meet people as enthusiastic and eager to learn new technology like me.','about']);
            $scope.read = '';
        }else if ($scope.read == 'experience') {
            $scope.array.push(['Junior PHP Developer'+
                'Group Five Software '+
                'March 2016 – Present (8 months)','experience']);
            $scope.read = '';
        }else if ($scope.read == "skills"){
            $scope.array.push(['USING EVERY DAY => PHP, JavaScript, Symfony, AngularJs, Jquery, MySql, Git, Linux.  '+
                'LEARNING => C#, ASP.NET','skills']);
            $scope.read = '';
        }else if($scope.read == 'clear'){
            $scope.array = [];
            $scope.read = '';
        }else if($scope.read == ''){
            $scope.array.push(['',$scope.read]);
            $scope.read = '';
        }else if ($scope.read == 'education') {
            $scope.array.push(['FSEGA - Facultatea de Stiinte Economice si Gestiunea Afacerilor, Universitatea Babes Bolyai, Cluj-Napoca. '+
                'INFORMATICA ECONOMICA -- 2016-2019','education']);
            $scope.read = '';
        }else if ($scope.read == 'help') {
            $scope.array.push(['Availble comands = help, clear, about, experience, education, skills, contact','help']);
            $scope.read = '';
        }else if($scope.read == 'contact'){
            $scope.array.push(['nr: 0736171593 , eMail: favianioel@yahoo.com ','contact']);
            $scope.read = '';
        }else {
            $scope.array.push([$scope.read+' : command not found. Please enter an availble command , run `help` for commands.',$scope.read]);
            $scope.read = '';
        }
    };

}]);
})();
