angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
    $scope.main={};
    $scope.main.isDragable = true;
    
    $scope.changeClass = function(e){
        var el = document.getElementsByClassName('options-List-Cont');
        for(var z=0 ; z<el.length ; z++){
            el[z].setAttribute('class','options-List-Cont displayNone');
        }
    }
})
//Login page functionality
.controller('LoginCtrl', function($scope, $location) {
    $scope.main.isDragable = false;
    $scope.checkUser = function(){
        $location.path('/app/attendance');
    }
})

//Attendance page 
.controller('AttendanceCtrl', function($scope, $location) {
    $scope.main.isDragable = true;
    
    
    // Semester Logic
    $scope.semester = [{'name':'-- Select Semester --', 'id':'0'},
                       {'name':'Semester I', 'id':'sem-1'},
                       {'name':'Semester II', 'id':'sem-2'},
                       {'name':'Semester III', 'id':'sem-3'},
                       {'name':'Semester IV', 'id':'sem-4'},
                       {'name':'Semester V', 'id':'sem-5'},
                       {'name':'Semester VI', 'id':'sem-6'}];
    
    $scope.showSemester = function(){
        $scope.changeClass();
        var s = angular.element(opt);
        s.toggleClass('displayNone');
    }
    
    $scope.selectedSemester = function(data){
        $scope.selectedSemesterVal = data.name;
        var s = angular.element(opt);
        s.toggleClass('displayNone');
    }
    
    // Course Logic
    $scope.course = [{'name':'-- Select Course --', 'id':'0'},
                     {'name':'BCOM', 'id':'course-1'},
                     {'name':'BA', 'id':'course-2'},
                     {'name':'BSc Chemistry', 'id':'course-3'},
                     {'name':'BSc Physics', 'id':'course-4'},
                     {'name':'BA Sanskrit', 'id':'course-5'},
                     {'name':'BA Urdu', 'id':'course-6'}];
               
    $scope.showCourse = function(){
        $scope.changeClass();
        var s = angular.element(optCourse);
        s.toggleClass('displayNone');
    }
   
    $scope.selectedCourse = function(data){
       $scope.selectedCourseVal = data.name;
       var s = angular.element(optCourse);
       s.toggleClass('displayNone');
    }
    
    // Paper Logic
    $scope.paper = [{'name':'-- Select Paper --', 'id':'0'},
                    {'name':'Physics', 'id':'paper-1'},
                    {'name':'Chemistry', 'id':'paper-2'},
                    {'name':'Maths', 'id':'paper-3'},
                    {'name':'Sanskrit', 'id':'paper-4'},
                    {'name':'Hindi', 'id':'paper-5'},
                    {'name':'Urdu', 'id':'paper-6'}];
               
    $scope.showPaper = function(){
        $scope.changeClass();
        var s = angular.element(optPaper);
        s.toggleClass('displayNone');
    }
   
    $scope.selectedPaper = function(data){
       $scope.selectedPaperVal = data.name;
       var s = angular.element(optPaper);
       s.toggleClass('displayNone');
    }
    
    $scope.fillAttendance = function(){
        /*if($scope.selectedSemesterVal !=undefined && $scope.selectedCourseVal !=undefined && $scope.selectedPaperVal !=undefined){
            if($scope.selectedSemesterVal.indexOf('Select') > -1 || $scope.selectedCourseVal.indexOf('Select') > -1 || $scope.selectedPaperVal.indexOf('Select') > -1){
                alert('Invalid or No Options Selected');
                return false; 
            }
            $location.path('/app/fillattendance');
        }else{
            alert('Invalid or No Options Selected');
            return false;
        }*/
        $location.path('/app/fillattendance');
        
    }
})

//Fill Attendance page
.controller('FillAttendanceCtrl', function($scope, $stateParams) {
    $scope.main.isDragable = false;
})


//Assesment page
.controller('AssesmentCtrl', function($scope, $stateParams) {
    $scope.main.isDragable = true;
})

//Settings page
.controller('SettingsCtrl', function($scope, $stateParams) {
    $scope.main.isDragable = true;
})


//Logout 
.controller('LogoutCtrl', function($scope, $stateParams) {
    $scope.main.isDragable = true;
})
