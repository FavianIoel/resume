var app = angular.module('resumeApp', []);
app.controller('terminalController', function($scope) {
    $scope.logs = ['run `help` for avilble commands'];
    $scope.dothis = function(){
        if ($scope.read == 'about') {
            $scope.logs.push('I am very passionate about programming , '
                +'I never abide at what I already know and I always try to learn new technologies that later i will apply in my projects .'
                +' I rejoice every time I meet people as enthusiastic and eager to learn new technology like me.');
            $scope.read = '';
        }else if ($scope.read == 'experience') {
            $scope.logs.push('Junior PHP Developer'+
                'Group Five Software '+
                'March 2016 – Present (8 months)');
            $scope.read = '';
        }else if ($scope.read == "skills"){
            $scope.logs.push('USING EVERY DAY => PHP, JavaScript, Symfony, AngularJs, Jquery, MySql, Git, Linux.  '+
                'LEARNING => C#, ASP.NET');
            $scope.read = '';
        }else if($scope.read == 'clear'){
            $scope.logs = [];
            $scope.read = '';
        }else if($scope.read == ''){
            $scope.logs.push('');
            $scope.read = '';
        }else if ($scope.read == 'education') {
            $scope.logs.push('FSEGA - Facultatea de Stiinte Economice si Gestiunea Afacerilor, Universitatea Babes Bolyai, Cluj-Napoca. '+
                'INFORMATICA ECONOMICA -- 2016-2019');
            $scope.read = '';
        }else if ($scope.read == 'help') {
            $scope.logs.push('Availble comands = help, clear, about, experience, education, skills, contact');
            $scope.read = '';
        }else if($scope.read == 'contact'){
            $scope.logs.push('nr: 0736171593 , eMail: favianioel@yahoo.com ');
            $scope.read = '';
        }else {
            $scope.logs.push('Please enter an availble command , run `help` for commands.');
            $scope.read = '';
        }
    };
});

