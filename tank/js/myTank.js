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
            this.launchBullet();
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
            var img = document.getElementById("tulip");
            myTankTx.clearRect(this.Tank_X, this.Tank_y, 30, 30);
            switch (this.Tank_direction) {
                //上
                case 'top':
                    myTankTx.drawImage(img, 0, 0, 30, 30, this.Tank_X, this.Tank_y, 30, 30);
                    break;
                case 'left':
                    myTankTx.drawImage(img, 62, 0, 30, 30, this.Tank_X, this.Tank_y, 30, 30);
                    break;
                case 'right':
                    myTankTx.drawImage(img, 94, 0, 30, 30, this.Tank_X, this.Tank_y, 30, 30);
                    break;
                case 'bottom':
                    myTankTx.drawImage(img, 30, 0, 30, 30, this.Tank_X, this.Tank_y, 30, 30);
                    break;
            }
            this.bindEvent(myTankTx);
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
            var myBullet = document.getElementById("myBullet");
            var myBulletTx = myBullet.getContext("2d");
            var img = document.getElementById("tulip");
            myBulletTx.clearRect(this.Bullet_X,this.Bullet_y, 5, 7);
            switch (this.Tank_direction) {
                case "top":
                    this.Bullet_X = this.Tank_X + (30 / 2);
                    this.Bullet_y = this.Tank_y;
                    myBulletTx.drawImage(img, 81, 95, 5, 7, this.Bullet_X, this.Bullet_y, 5, 7);
                    break;
                case "left":
                    this.Bullet_X = this.Tank_X;
                    this.Bullet_y = this.Tank_y + (30/2) - 2;
                    myBulletTx.drawImage(img, 91, 95, 7, 7, this.Bullet_X, this.Bullet_y, 7, 7);
                    break;
                case "right":
                    this.Bullet_X = this.Tank_X + 30;
                    this.Bullet_y = this.Tank_y + (30/2) -2;
                    myBulletTx.drawImage(img, 97, 95, 7, 7, this.Bullet_X, this.Bullet_y, 7, 7);
                    break;
                case "bottom":
                    this.Bullet_X = this.Tank_X + (30 / 2) + 1;
                    this.Bullet_y = this.Tank_y + 30;
                    myBulletTx.drawImage(img, 86, 95, 5, 7, this.Bullet_X, this.Bullet_y, 5, 7);
                    break;
            }

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