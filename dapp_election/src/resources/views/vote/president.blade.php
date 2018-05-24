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

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</head>

<body data-spy="scroll" data-target=".mainmenu-area">
    <!--========= web3 ====================================================================-->
    <script src="js/president_election.js"></script>
    <script src="js/truffle-contract.js"></script>
    
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
                                
                                후보자 수 : <input type="text" id="candidates" name="candidates" value=""> (최대 10) <div style="" class="space-10"></div>
                                <a href="#" id="filldetails" onclick="addFields()" class="bttn-default wow fadeInUp" data-wow-delay="0.8s">후보자 이름, 정보 입력하기</a>
                                <div id="num_of_input"/>
                                </div>
                                <!-- <button id="candidates" class="bttn-default wow fadeInUp" data-wow-delay="0.8s" onclick="myCandidates()">후보자확인</button> -->
    
                            <div style="" class="space-30"></div>
                            
                            <div class="space-50"></div>
                            <button id="yes" type="submit" class="bttn-default wow fadeInUp" data-wow-delay="0.8s" onclick="myFunction()">투표제작완료</button>

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
    <script type='text/javascript'>
        var number;
        var input;
        var name = new Array();
        addFields();
        // myCandidates();
        myFunction();

        function addFields(){
            var name = new Array();
            var info = new Array();
            // info.push 하구 넣쟈아

            // Number of inputs to create
            number = document.getElementById("candidates").value;
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
               input = document.createElement("input");
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
        // function myCandidates() {
        //     for(i=0; i<number; i++){
        //         App.addCandidates("candidates" + (i+1));
        //     }
        //     // console.log("myCandidates ---- 후보자 수: " + number);
        //     // console.log("이름? " + input.name);
        // }
        function myFunction() {
            var str = document.getElementsByName('from')[0].value;
            var f_year = Number(str.slice(0, 4));
            var f_month = Number(str.slice(5, 7));
            var f_day = Number(str.slice(8, 10));
            var f_hour = Number(str.slice(11, 13));
            var f_minute = Number(str.slice(14, 16));
            
            var str2 = document.getElementsByName('to')[0].value;
            var t_year = Number(str2.slice(0, 4));
            var t_month = Number(str2.slice(5, 7));
            var t_day = Number(str2.slice(8, 10));
            var t_hour = Number(str2.slice(11, 13));
            var t_minute = Number(str2.slice(14, 16));

            for(i=0; i<number; i++){
                App.addCandidate("candidates" + (i+1));
            }
            
            App.setTimeStamp(f_year, f_month, f_day, f_hour, f_minute);
            App.setEndTimeStamp(t_year, t_month, t_day, t_hour, t_minute);
        }
    </script>                  
</body>
</html>