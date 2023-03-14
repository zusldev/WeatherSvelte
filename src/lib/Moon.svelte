<div class="container">
    <div id="cloud" />
    <div id="cloud" />
    <div id="star" />
    <div id="moon" />
</div>

<style>
    .container {
        position: relative;
        filter: opacity(0.8);
        
    }
    #cloud:after {
        content: "";
        position: absolute;
        z-index: 999;
        border-radius: 25px;
        width: 50px;
        height: 15px;
        background-color: #fff;
        top: 0px;
        right: 0px;
        box-shadow: -20px -10px 0 -2px #fff, 10px 0 0 0 #fff;
        animation: slow-float 3s infinite;
    }
    #cloud:nth-child(2):after {
        top: 100px;
        left: -30px;
        box-shadow: 25px -10px 0 0px #fff, 15px 7px 0 -2px #fff;
    }
    #star {
        height: 5px;
        width: 5px;
        border-radius: 100%;
        background-color: #fff;
        box-shadow: 200px 100px 0 0 #fff, 180px 50px 0 0 #fff,
            -30px 120px 0 0 #fff, -45px 50px 0 0 #fff, 110px -30px 0 0 #fff,
            100px -40px 0 -1px #fff, 150px 120px 0 -1px #fff,
            35px -55px 0 -1px #fff, 0px -30px 0 0 #fff, 200px 0px 0 0 #fff,
            205px 90px 0 -1px #fff, 250px -50px 0 -1px #fff,
            -100px 90px 0 0px #fff, -90px -50px 0 -1px #fff;
    }
    #moon {
        margin: 0 auto;
        position: relative;
        width: 150px;
        height: 150px;
        background-color: #fae4a8;
        border-radius: 50%;
        box-shadow: 0px 2px 19px 2px #fff;
        background-image: radial-gradient(
                circle at 40% 80%,
                #ddc997 10%,
                transparent 0
            ),
            radial-gradient(circle at 55% 70%, #ddc997 5%, transparent 0),
            radial-gradient(circle at 58% 85%, #ddc997 6%, transparent 0),
            radial-gradient(circle at 80% 40%, #ddc997 12%, transparent 0),
            radial-gradient(circle at 87% 58%, #ddc997 4%, transparent 0);
        animation: float 3s infinite;
    }

    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    @keyframes slow-float {
        0%,
        100% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-5px);
        }
    }

    @keyframes zoom {
        0%,
        100% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.7);
        }
    }
</style>
