<!doctype html>
<html class="" lang="kr">

<head>
    <meta charset="utf-8">
    <meta name="author" content="Sumon Rahman">
    <meta name="description" content="">
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Title -->
    <title>Appy App Landing Template.</title>
    <!-- Place favicon.ico in the root directory -->
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    <link rel="shortcut icon" type="image/ico" href="images/favicon.ico" />
<!-- Plugin-CSS -->
<link rel="stylesheet" href="/css/bootstrap.min.css">
    <!-- Main-Stylesheets -->
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/style_register.css">
    <link rel="stylesheet" href="/css/responsive.css">
    <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    
    <link rel="stylesheet" href="/post_inc/datetimepicker/bootstrap-datepicker.css">
<script src="/post_inc/datetimepicker/bootstrap-datepicker.js"></script>

<!--========= web3 ====================================================================-->
<script src="../../../../web3/president_election.js"></script>
<script src="../../../../web3/truffle-contract.js"></script>

<link rel="stylesheet" href="/post_inc/datetimepicker/bootstrap-datepicker_3d.css">
<script src="/post_inc/datetimepicker/moment-with-locales.js"></script>
<script src="/post_inc/datetimepicker/bootstrap-datepicker_3d.js"></script>
    <!-- date picker-->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    
    
    <!--[if lt IE 9]>
        <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
</head>

<body data-spy="scroll" data-target=".mainmenu-area">
  
    <!-- MainMenu-Area -->
    <nav class="mainmenu-area" data-spy="affix" data-offset-top="200">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><img src="images/logo.png" alt="Logo"></a>
        </div>
    </nav>
    <!-- MainMenu-Area-End -->
	
    <!-- register-Area -->
    <section class="feature-area section-padding gray-bg" id="shareholder_page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-10 col-md-offset-1">
                    <div class="space-60 hidden visible-xs"></div>
                    <div class="page-title">
                        <div class="space-10"></div>
                        <h3 class="dark-color wow fadeInUp" data-wow-delay="0.4s">대통령선거</h3>
                        <div class="space-20"></div>
                        <div class="desc wow fadeInUp" data-wow-delay="0.6s">
                            
                        <div class="subscribe-form text-center">
                            <form id="mc-form" action="/president" method="POST">
                                {{ csrf_field()}}
                                <div class="col-md-12 col-sm-10">
                                    시작일시: <input class="control" type="text" id="from" name="from" placeholder="2018-05-15 08:00"  style="width:250px;"/>
                                    <div style="" class="space-10"></div>
                                    종료일시: <input class="control" type="text" id="to" name="to" placeholder="2018-05-16 18:00" style="width:250px;"/>
                                    <div style="" class="space-10"></div>
                                    <hr>
                                </div>   
                                
                                    
                                    <div style="" class="space-10"></div>
                                    <script type='text/javascript'>
                                        function addFields(){
                                            var name = new Array();
                                            var info = new Array();
                                            // info.push 하구 넣쟈아

                                            $( "#yes" ).click(function() {
                                                App.test("asdf");
                                                //CHECK here for the checkbox;
                                                if(checked) alert();
                                                $( "#form" ).submit();
                                                });


                                            // Number of inputs to create
                                            var number = document.getElementById("candidates").value;
                                            // Container <div> where dynamic content will be placed
                                            var container = document.getElementById("num_of_input");
                                            // Clear previous contents of the container
                                            while (container.hasChildNodes()) {
                                                container.removeChild(container.lastChild);
                                            }
                                            for (i=0;i<number;i++){
                                                // Append a node with a random text
                                                container.appendChild(document.createTextNode("candidates " + (i+1)));
                                                // Create an <input> element, set its type and name attributes
                                                var input = document.createElement("input");
                                                input.type = "text";
                                                input.name = "candidates_name" + i;
                                                input.placeholder = "후보자 이름";
                                                container.appendChild(input);
                                                var info = document.createElement("input");
                                                info.type = "text";
                                                info.name = "info" + i;
                                                info.placeholder = "후보자 정당";
                                                container.appendChild(info);
                                                // Append a line break 
                                                container.appendChild(document.createElement("br"));
                                            }
                                        }
                                    </script>
                                    후보자 수 : <input type="text" id="candidates" name="candidates" value=""> (최대 10) <div style="" class="space-10"></div>
                                    <a href="#" id="filldetails" onclick="addFields()" class="bttn-default wow fadeInUp" data-wow-delay="0.8s">후보자 이름, 정보 입력하기</a>
                                    <div id="num_of_input"/>
                                </div>
                            <div style="" class="space-30"></div>
                            
                            <div class="space-50"></div>
                            <button id="yes" type="submit" class="bttn-default wow fadeInUp" data-wow-delay="0.8s">투표지확인</button>

                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- register-Area-End -->
    <!-- Footer-Area -->
    <footer class="footer-area" id="contact_page">
        <!-- Footer-Bootom -->
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-12">
            <span>선거관리위원회 | 경기도 과천시 홍촌말로 44 중앙선거관리위원회 [13809] <i class="lnr lnr-heart" aria-hidden="true"></i> by 유종의 미</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer-Bootom-End -->
    </footer>

    <!-- Footer-Area-End -->
    <!--Vendor-JS-->
    <script src="js/vendor/jquery-1.12.4.min.js"></script>
    <script src="js/vendor/jquery-ui.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <!--Plugin-JS-->
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/contact-form.js"></script>
    <script src="js/ajaxchimp.js"></script>
    <script src="js/scrollUp.min.js"></script>
    <script src="js/magnific-popup.min.js"></script>
    <script src="js/wow.min.js"></script>
    <!--Main-active-JS-->
    <script src="js/main.js"></script>
         
    <script>
        //datepicker
        $(function() {
                $("#from").datepicker({
                defaultDate: "+w",
                changeMonth: true,
                dateFormat: 'yy-mm-dd hh:ii',
                dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
                monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],

                onClose: function(selectedDate) {
                    $temp = explode('/', selectdDate);
                    $("#to").datepicker("option", "minDate", selectedDate);
                }
            });

            $("#to").datepicker({
                defaultDate: "+w",
                changeMonth: true,
                dateFormat: 'yy-mm-dd hh:ii',
                dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
                monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                language : 'ko', pickTime : false, defalutDate : new Date(),

                onClose: function(selectedDate) {
                    $("#from").datepicker("option", "maxDate", selectedDate);
                }
            });

            
            var date = $('#from').datepicker(selectedDate);
            console.log(date);
        });
    </script>
                  
</body>


</html>
