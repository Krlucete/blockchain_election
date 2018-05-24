<!doctype html>
<html class="no-js" lang="zxx">
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
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/linearicons.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="css/animate.css">
    
    <!-- Main-Stylesheets -->
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/style_launch.css">
    <link rel="stylesheet" href="/css/responsive.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js"></script>
</head>

<body data-spy="scroll" data-target=".mainmenu-area">
    <!--========= web3 =========-->
    <script src="js/president_election.js"></script>
    <script src="js/truffle-contract.js"></script>

<body data-spy="scroll" data-target=".mainmenu-area">
    <!-- MainMenu-Area -->
    <nav class="mainmenu-area" data-spy="affix" data-offset-top="200">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#primary_menu">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><img src="images/logo.png" alt="Logo"></a>
            </div>
            <div class="collapse navbar-collapse" id="primary_menu">
                <ul class="nav navbar-nav mainmenu">
                    <li class="active"><a href="#home_page">선거관리위원회</a></li>
                    <li><a href="#president_page">대통령선거</a></li>
                    <li><a href="#shareholder_page">주주총회선거</a></li>
                </ul>
                <div class="right-button hidden-xs">
                    <a href="/register">회원가입</a>
                </div>
            </div>
        </div>
    </nav>
    <!-- MainMenu-Area-End -->
    <!-- Home-Area -->
    <header class="home-area overlay" id="home_page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 hidden-sm col-md-5">
                    <figure class="mobile-image wow fadeInUp" data-wow-delay="0.2s">
                        <img src="images/vote_committee.png" alt="">
                    </figure>
                </div>
                <div class="col-xs-12 col-md-7">
                    <h1 class="wow fadeInUp" data-wow-delay="0.4s">선거관리위원회</h1>
                    <h3 class="wow fadeInUp" data-wow-delay="0.4s">투표제작 페이지입니다</h3>
                    <div class="space-20"></div>
                    <div class="desc wow fadeInUp" data-wow-delay="0.6s">
                        <p>선거를 제작하고, 투표를 진행하세요!</p>
                    </div>
                    <div class="space-20"></div>
                    <a href="/login" class="bttn-white wow fadeInUp" data-wow-delay="0.8s">로그인하기</a>
                </div>
            </div>
        </div>
    </header>
    <!-- Home-Area-End -->
    <!-- President-Area -->
    <section class="section-padding" id="president_page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-10 col-md-offset-1">
                    <div class="page-title">
                        <h5 class="title wow fadeInUp" data-wow-delay="0.2s">President</h5>
                        <div class="space-10"></div>
                        <h3 class="dark-color wow fadeInUp" data-wow-delay="0.4s">대통령선거 제작하기</h3>
                        <div class="space-20"></div>
                        <div class="desc wow fadeInUp" data-wow-delay="0.6s">
                            <p>대통령선거에는 선거 일시, 후보자 정보가 필요합니다</p>
                        </div>
                        <div class="space-50"></div>
                        <a href="/president" class="bttn-default wow fadeInUp" data-wow-delay="0.8s">투표 제작하기</a>
                        <div class="space-10"></div>
                        <button id="yes" type="submit" class="bttn-default wow fadeInUp" data-wow-delay="0.8s">
                        결과확인(chart)</button>
                        <button id="yes2" type="submit" class="bttn-default wow fadeInUp" data-wow-delay="0.8s" onclick="myFunction2()">
                        결과확인(console)</button>
                        <button class="bttn-default wow fadeInUp" data-wow-delay="0.8s" onclick="myFunction1()">
                        집계하기</button>
                            <!-- The Modal -->
                        <div id="myModal" class="modal">
                            <!-- Modal content -->
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <p> 대통령 선거 결과 </p>
                                <canvas id="myChart"></canvas>
                                <br><p> 지역별 결과 </p>
                                <canvas id="myChart2"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- President-Area-End -->
    <!-- shareholder-Area -->
    <section class="feature-area section-padding  gray-bg" id="shareholder_page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-5 col-md-offset-1">
                    <div class="page-title">
                        <h5 class="title wow fadeInUp" data-wow-delay="0.2s">shareholder</h5>
                        <div class="space-10"></div>
                        <h3 class="dark-color wow fadeInUp" data-wow-delay="0.4s">주주총회선거 제작하기</h3>
                        <div class="space-20"></div>
                        <div class="desc wow fadeInUp" data-wow-delay="0.6s">
                            <p>주주총회선거에는 투표 이름, 선거 일시, 후보자 정보, 투표자 정보가 필요합니다</p>
                        </div>
                        <div class="space-50"></div>
                        <a href="/shareholder" class="bttn-default wow fadeInUp" data-wow-delay="0.8s">투표 제작하기</a>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <!-- shareholder-Area-End -->
    <!-- Footer-Area -->
    <footer class="footer-area" id="contact_page">
        <!-- Footer-Bootom -->
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-12">
            <span>선거관리위원회 | 경기도 과천시 홍촌말로 44 중앙선거관리위원회 [13809] by 유종의 미</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer-Bootom-End -->
    </footer>
    <!-- Footer-Area-End -->

    <script>
        var modal = document.getElementById('myModal');
    // Get the button that opens the modal
        var btn = document.getElementById("yes");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
        modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    // ------------ chart --------------------------
    var ctx = document.getElementById("myChart");
    var datas = {
        labels: [],
        datasets: [{
        label: '# of Votes',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        }]
    }
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: datas,
    });
    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }
    function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

    // addData(myChart, "1번후보", 5000000);
    // addData(myChart, "2번후보", 1000000);
    // addData(myChart, "3번후보", 3500000);
    var ctx = document.getElementById("myChart2");
    var datas = {
        labels: [],
        datasets: [{
        label: '# of Votes',
        data: [],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        }]
    }
    var myChart2 = new Chart(ctx, {
        type: 'pie',
        data: datas,
    });
    addData(myChart2, "이박사", 5000000);
    addData(myChart2, "문검사", 1000000);
    addData(myChart2, "강시장", 10000);

    ////////////////////////////////////
    getCookie();

    function myFunction1() {  // 집계하기
        var number = getCookie('candidates');
        App.voteCount = [];
        for(var i=0; i<getCookie('candidates'); i++){
            App.getVoteCount(i+1);
        }
    }

    function myFunction2(){ // 결과확인(console)
        for(var i=0; i<getCookie('candidates'); i++){
          console.log("후보" + (i+1) + ": " + App.voteCount[i]);
        }
        for(var i=0; i<getCookie('candidates'); i++){
            addData(myChart, (i+1) + "번후보", Number(App.voteCount[i]));
        }
    }

    function getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length;i++){
            var c = ca[i];
            while(c.charAt(0)==' ') c = c.substring(1);
                if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
        return "";
    }
    </script>         
</body>
</html>
