<div class="container">
    <div id="sun" />
</div>

<style>
    .container {
        position: relative;
        filter: opacity(0.8);
    }

    #sun {
        margin-top: 20px;
        position: relative;
        width: 150px;
        height: 150px;
        background-image: radial-gradient(
            circle,
            #ffdb58,
            #ffbc00,
            #ff8c00,
            #ff4f00,
            #ff0000
        );
        border-radius: 50%;
        box-shadow: 0 0 35px 5px yellow,0 0 25px 10px yellow inset;
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
