define([], function () {

    var myTank = {
        Tank_X: 250, //坦克X坐标
        Tank_y: 250, //坦克Y坐标
        Bullet_X: 0,//子弹X坐标
        Bullet_y: 0,//子弹Y坐标
        Tank_direction: 'top',
        /**
         * 入口
         */
        start: function () {
            // this.init();
            this.drawTank();

        },
        /**
         * 初始化DOM元素
         */
        init: function () {
            var canvas = document.createElement("canvas");
            canvas.setAttribute("id", "myTank");
            canvas.setAttribute("width", "500px");
            canvas.setAttribute("height", "500px");
            document.body.appendChild(canvas);
        },

        /**
         * 画坦克
         */
        drawTank: function () {
            var myTank = document.getElementById("myTank");
            var myTankTx = myTank.getContext("2d");
            myTankTx.clearRect(this.Tank_X, this.Tank_y, 50, 50);
            switch (this.Tank_direction) {
                //上
                case 'top':
                    this.drawTopTank(myTankTx);
                    break;
                case 'left':
                    this.drawLeftTank(myTankTx);
                    break;
                case 'right':
                    this.drawRightTank(myTankTx);
                    break;
                case 'bottom':
                    this.drawBottomTank(myTankTx);
                    break;
            }
            this.bindEvent(myTankTx);

        },
        /**
         * 坦克向上
         * @param myTankTx
         */
        drawTopTank: function (myTankTx) {
            // myTankTx.fillStyle = "#542174";
            // myTankTx.fillRect(this.Tank_X, this.Tank_y, 13, 50); //左轮
            // myTankTx.fillRect(this.Tank_X + 37, this.Tank_y, 13, 50); //右轮
            // myTankTx.fillRect(this.Tank_X + 15, this.Tank_y + 10, 20, 30); // 炮塔底座
            // myTankTx.fillStyle = "#FCB827";
            // myTankTx.beginPath();
            // myTankTx.arc(50 / 2 + this.Tank_X, 50 / 2 + this.Tank_y, 6, 2 * Math.PI, false);
            // myTankTx.closePath();
            // myTankTx.fill();
            // myTankTx.strokeStyle = "#FCB827";
            // myTankTx.lineWidth = "6.0";
            // myTankTx.moveTo(50 / 2 + this.Tank_X, 50 / 2 + this.Tank_y);
            // myTankTx.lineTo(50 / 2 + this.Tank_X, this.Tank_y);
            // myTankTx.stroke();

            var img=document.getElementById("tulip");
            myTankTx.drawImage(img,10,10);



        },
        /**
         * 坦克向下
         * @param myTankTx
         */
        drawBottomTank: function (myTankTx) {
            myTankTx.fillStyle = "#542174";
            myTankTx.fillRect(this.Tank_X, this.Tank_y, 13, 50); //左轮
            myTankTx.fillRect(this.Tank_X + 37, this.Tank_y, 13, 50); //右轮
            myTankTx.fillRect(this.Tank_X + 15, this.Tank_y + 10, 20, 30); // 炮塔底座
            myTankTx.fillStyle = "#FCB827";
            myTankTx.beginPath();
            myTankTx.arc(50 / 2 + this.Tank_X, 50 / 2 + this.Tank_y, 6, 2 * Math.PI, false);
            myTankTx.closePath();
            myTankTx.fill();
            myTankTx.strokeStyle = "#FCB827";
            myTankTx.lineWidth = "6.0";
            myTankTx.moveTo(50 / 2 + this.Tank_X, 50 / 2 + this.Tank_y);
            myTankTx.lineTo(50 / 2 + this.Tank_X, this.Tank_y + 50);
            myTankTx.stroke();
        },
        /**
         * 坦克向左
         * @param myTankTx
         */
        drawLeftTank: function (myTankTx) {
            myTankTx.fillStyle = "#542174";
            myTankTx.fillRect(this.Tank_X, this.Tank_y, 50, 13); //左轮
            myTankTx.fillRect(this.Tank_X, this.Tank_y + 37, 50, 13); //右轮
            myTankTx.fillRect(this.Tank_X + 10, this.Tank_y + 15, 30, 20); // 炮塔底座
            myTankTx.fillStyle = "#FCB827";
            myTankTx.beginPath();
            myTankTx.arc(50 / 2 + this.Tank_X, 50 / 2 + this.Tank_y, 6, 2 * Math.PI, false);
            myTankTx.closePath();
            myTankTx.fill();
            myTankTx.strokeStyle = "#FCB827";
            myTankTx.lineWidth = "6.0";
            myTankTx.moveTo(50 / 2 + this.Tank_X, 50 / 2 + this.Tank_y);
            myTankTx.lineTo(this.Tank_X, this.Tank_y + 50 / 2);
            myTankTx.stroke();
        },
        /**
         * 坦克向右
         * @param myTankTx
         */
        drawRightTank: function (myTankTx) {
            myTankTx.fillStyle = "#542174";
            myTankTx.fillRect(this.Tank_X, this.Tank_y, 50, 13); //左轮
            myTankTx.fillRect(this.Tank_X, this.Tank_y + 37, 50, 13); //右轮
            myTankTx.fillRect(this.Tank_X + 10, this.Tank_y + 15, 30, 20); // 炮塔底座
            myTankTx.fillStyle = "#FCB827";
            myTankTx.beginPath();
            myTankTx.arc(50 / 2 + this.Tank_X, 50 / 2 + this.Tank_y, 6, 2 * Math.PI, false);
            myTankTx.closePath();
            myTankTx.fill();
            myTankTx.strokeStyle = "#FCB827";
            myTankTx.lineWidth = "6.0";
            myTankTx.moveTo(50 / 2 + this.Tank_X, 50 / 2 + this.Tank_y);
            myTankTx.lineTo(this.Tank_X + 50, this.Tank_y + 50 / 2);
            myTankTx.stroke();
        },
        /**
         * 绑定事件
         * @param myTankTx
         */
        bindEvent: function (myTankTx) {
            window.onkeydown = function (e) {
                //清除地图上自己的坦克
                myTankTx.clearRect(this.Tank_X, this.Tank_y, 50, 50);
                //地图的宽度
                var map_width = document.getElementById("myTank").width;
                //地图的高度
                var map_height = document.getElementById("myTank").height;
                //获取键盘按键值
                var keyCode = e.keyCode;
                switch (keyCode) {
                    case 87: //W键：上
                        if (this.Tank_direction === 'top') {
                            this.Tank_y = this.Tank_y - 5;
                            if (this.Tank_y <= 0) {
                                this.Tank_y = 0;
                            }
                        } else {
                            this.Tank_direction = 'top';
                        }
                        break;
                    case 65: //A键：左
                        if (this.Tank_direction === 'left') {
                            this.Tank_X = this.Tank_X - 5;
                            if (this.Tank_X <= 0) {
                                this.Tank_X = 0;
                            }
                        } else {
                            this.Tank_direction = 'left';
                        }
                        break;
                    case 68: //D键：右
                        if (this.Tank_direction === 'right') {
                            this.Tank_X = this.Tank_X + 5;
                            if (this.Tank_X >= (map_width - 50)) {
                                this.Tank_X = (map_width - 50);
                            }
                        } else {
                            this.Tank_direction = 'right';
                        }
                        break;
                    case 83: //S键：下
                        if (this.Tank_direction === 'bottom') {
                            this.Tank_y = this.Tank_y + 5;
                            if (this.Tank_y >= (map_height - 50)) {
                                this.Tank_y = (map_height - 50);
                            }
                        } else {
                            this.Tank_direction = 'bottom';
                        }
                        break;
                    case 32: // 坦克发射子弹
                        this.launchBullet();
                        break;
                }
                this.drawTank();
            }.bind(this);
        },
        /**
         * 发射子弹
         */
        launchBullet: function () {
            switch (this.Tank_direction) {
                case "top":
                    this.Bullet_X = this.Tank_X + (50 / 2);
                    this.Bullet_y = this.Tank_y;
                    break;
                case "left":
                    break;
                case "right":
                    break;
                case "bottom":
                    break;
            }

            var c = document.getElementById("myTank");
            var ctx = c.getContext("2d");
            this.drawBullet(this.Bullet_X, this.Bullet_y, ctx);
        },
        /**
         * 画子弹
         */
        drawBullet: function (x, y, ctx) {
            ctx.beginPath();
            ctx.lineWidth = "1.0";
            ctx.fillStyle = "#FCB827";
            ctx.arc(x, y, 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            this.bulletMove(ctx);
        },
        /**
         * 子弹移动
         * @param ctx
         */
        bulletMove: function (ctx) {
            var _X = this.Bullet_X,
                _y = this.Bullet_y;

            switch (this.Tank_direction) {
                case "top":
                    this.Bullet_y = this.Bullet_y - 5;
                    break;
                case "left":
                    this.Bullet_X = this.Bullet_X - 5;
                    break;
                case "right":
                    this.Bullet_X = this.Bullet_X + 5;

                    break;
                case "bottom":
                    this.Bullet_y = this.Bullet_y + 5;
                    break;
            }

            var time = setInterval(function () {
                ctx.clearRect(_X - 3, _y - 3, 6, 6);
                this.drawBullet(this.Bullet_X, this.Bullet_y, ctx);
            }.bind(this), 1000);




        }


    };

    return myTank;

})