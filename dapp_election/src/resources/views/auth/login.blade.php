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
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <!-- Main-Stylesheets -->
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/style_register.css">
    <link rel="stylesheet" href="/css/responsive.css">
    <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    <!--[if lt IE 9]>
        <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body data-spy="scroll" data-target=".mainmenu-area">
 
    <!-- MainMenu-Area -->
    <nav class="mainmenu-area" data-spy="affix" data-offset-top="200">
        <div class="container-fluid">
            <a class="navbar-brand" href="/index.html"><img src="images/logo.png" alt="Logo"></a>
        </div>
    </nav>
    <!-- MainMenu-Area-End -->
    <!-- register-Area -->
    <section class="feature-area section-padding gray-bg" id="shareholder_page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-10 col-md-offset-1">
                   <div class="space-60 hidden visible-xs"></div>
      <div class="space-60 hidden visible-xs"></div>
                    <div class="page-title">
                        <div class="space-10"></div>
                        <h3 class="dark-color wow fadeInUp" data-wow-delay="0.4s">로그인</h3>
                        <div class="space-20"></div>
                        <div class="desc wow fadeInUp" data-wow-delay="0.6s">
                            
                        <div class="subscribe-form text-center">





                           <form class="form-horizontal" method="POST" action="{{ route('login') }}">

                                {{ csrf_field() }}



                                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">

                                    <label for="email" class="col-md-4 control-label">E-Mail Address</label>



                                    <div class="col-md-6">

                                        <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>



                                        @if ($errors->has('email'))

                                            <span class="help-block">

                                                <strong>{{ $errors->first('email') }}</strong>

                                            </span>

                                        @endif

                                    </div>

                                </div>



                                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">

                                    <label for="password" class="col-md-4 control-label">Password</label>



                                    <div class="col-md-6">

                                        <input id="password" type="password" class="form-control" name="password" required>



                                        @if ($errors->has('password'))

                                            <span class="help-block">

                                                <strong>{{ $errors->first('password') }}</strong>

                                            </span>

                                        @endif

                                    </div>

                                </div>



                                <div class="form-group">

                                    <div class="col-md-6 col-md-offset-4">

                                        <div class="checkbox">

                                            <label>

                                                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me

                                            </label>

                                        </div>

                                    </div>

                                </div>



                                <div class="form-group">

                                    <div class="col-md-8 col-md-offset-4">

                                        <button  type="submit" class="bttn-default wow fadeInUp" data-wow-delay="0.8s">로그인</button>



                                        <a class="btn btn-link" href="{{ route('password.request') }}">

                                            Forgot Your Password?

                                        </a>

                                    </div>

                                </div>

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
</body>

</html>
