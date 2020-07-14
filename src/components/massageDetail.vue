<template>
	<div class="news-detail page-content" data-v-1d3b09fb="" data-v-f774ee1a="">
		<div class="content" data-v-1d3b09fb="">
			<div class="crumbs max-show" data-v-1d3b09fb="">
				<el-breadcrumb separator-class="el-icon-arrow-right" style='color: red;'>
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/mediaReport' }" v-if='show1'>咨询详情</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/consultingService' }" v-if='show2'>咨询服务</el-breadcrumb-item>					
					<el-breadcrumb-item>正文</el-breadcrumb-item>
				</el-breadcrumb>
			</div>			
			<div class="main" data-v-1d3b09fb="">
				<div class="article" data-v-1d3b09fb=""  v-if="massageDetail.length!='' " v-loading="massageDetail.length==''"  v-for="item in massageDetail">
					<div class="title" data-v-1d3b09fb="">{{item.atitle}}</div>
					<div class="bar" data-v-1d3b09fb=""><img src="http://img.xindaikuangren.com/jdbbLogo0702.jpg" class="thumb" data-v-1d3b09fb="">
						<div class="author" data-v-1d3b09fb="">
							<h5 data-v-1d3b09fb="">焦点巴巴金融</h5>
							<p data-v-1d3b09fb="">{{item.atime}} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.rnum}}人已读</p>
						</div>
						<div class="share max-show" data-v-1d3b09fb="">
							<div class="text" data-v-1d3b09fb="">分享到 </div>
							<div class="icon" data-v-1d3b09fb="" @mouseenter="mouIn()" @mouseleave="mouleave()"><img src="http://img.xindaikuangren.com/weixin2.555344c.png" alt="" data-v-1d3b09fb="">
								<div class="sub" data-v-1d3b09fb="" v-if="show">
									<div data-v-1d3b09fb="" class="code">
										<div data-v-8fe6e6f4="" data-v-1d3b09fb="" class="qr qr-code">
											<div data-v-8fe6e6f4=""><img id="fdccf894-f519-4cda-af6a-465707c18375" src="http://img.xindaikuangren.com/zmhkewm0702.jpg"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="info" data-v-1d3b09fb="" v-html="item.contents"></div>
				</div>
				<div class="code max-show" data-v-1d3b09fb="">
					<ul data-v-1d3b09fb="">
						<!--<li data-v-1d3b09fb="">
							<h4 data-v-1d3b09fb="">扫码下载管家APP</h4>
							<div data-v-8fe6e6f4="" data-v-1d3b09fb="" class="qr qr-code">
								<div data-v-8fe6e6f4=""><img id="5b792ac9-8c1a-4b45-96c9-9aa4c69f8b2b" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAYE0lEQVR4Xu1daZRUVZL+MrOy9gVQtmITtUfagSoBh0VAXFpGBS103D0ziOgROYrLMCNuILQ/UDwN0i7ogVFmRpRpG0GwRbQFBWcAUUCKpQBB1GYp0IKiilpyeXMioci3xKsXL19mUQU3zqkflRl3i/vlvXHjRsT1AdDQjGjDhg245JJLTkuPrrjiCnzxxReGtmfMmIFHH33UsT8bN25E7969HfncMEyePBnPPfecY5EffvgB3bt3d+RrSgafAlZc3ApYyYOeApZOlgpYCljJk4ACVkpkqVYsBaymA9aqVavQuXPnlDSor5RTOJub8t66dWvk5+c7yuLCCy/EnDlzLHzcGDdt2iSqs1WrVqA/J7JT3vfs2eNU1PP3lZWVKC4uttTDrljUofPOO89zo04V+HzUvJGaG7CcxtDwPQmXToZm4sZYUVEhAoy0bTtgaVrqD/xHjhwB/fgs4+ZOhQpY0imN8ylgGWWmViwHHUsKMQUsBSxbrHDmBgWsxiXgeSskxXT16tVSORv4srOz8dprr4n0j1ToWPfcc4+o38uWLcPBgwcNvHfeeSeGDRvmWL6qqgrr16+38M2bN8/ymVTHWrRoEehPT3369MH48eMNn7nRsSZMmIDDhw87jodj4Nr2DCyaHE5Ikh4WFBSAOiBRbFMBLE6BlvSbeFJxpSMFFl3nTJkyxdDVkpISC9jcAIsOZXv37pUO37FtBayERKmApRcbB2oFLAWsmATUipUgELhiaiuMS0UBywFYpIuZXVzsipAOYqbXX38d9fX1jvAdOXIkhg4d6shHde3bt8+Rjxi6du0Kv99v4L3lllsstx10mKA/PfXq1QtjxoxJWHlXwHKYopkzZ+Kxxx4TTSRngaarkqNHj4rKS5js7FhcWa7tFStWgMwdiZBS3k1S83Klo4AVF6YClgJWTAJqxdIBobnZsdSKpVYspMJAygErJycHl156qUVNWblypeUzLzpW+/bt0aNHD0OdHTp0wNixY0Uq0ogRI1BdXW3gVTqWSHRGpqYCllcFWjq0UaNG4e233zawew2mUMCSSl/Hp4DlLDQFLGcZWTgUsJyFpoDlLCMFrARkdNYCa9y4cZg/f34CIkNMeedu1JNtx+rZsyfIX19C3bp1A/lrJ0KcjrV582YMGTLEUp3UCLtkyRIMHjzYUD4zMxP050Ru7FhFRUX48ccfnapkvx8+fDjeeecdw3eeL6ET6olDoWQDKxV95OrkgGXXtpd7Sq+R0MrnXTcrUn8sN3asZANOASsuUbViJRFdClgKWEmEU7wqBSwFLAWslEggQWCluC+NVs/pWNw95SOPPALSs/RkZ/2Wus1wR35KYfTyyy8b2nFjeffStlef99M5jy0id4MCVhwiboIpFLAcToUKWApYnn8kaiuMi1BthZ7hFK9AAesMAdaGDRtSn5LEBfAuuugiZGVlGUrQFcSvv/5q+Kxt27bo1KmT4bOamhqUlZVZWuNymkq9OKXKu13bXBQ2RYVTdLieKA1Sbm6u4bMDBw6A/vRE12Pm1EgUyLF161YXUk49q09rCrt/6sfhuoVkA8uuA02Rxsj14JuggAKWTshezA0KWEYJKGApYKVk/VLAUsBKDbBGjRplUd5feuklnHvuuY4NLl++3OKjRUEGEydOdCxLDJxiO3Xq1FikcKpJqmOtW7fOohiTQr19+3ZRF7kg1Lvuugvp6emG8tOmTRPXaW6Y5ormzEycfKVzKxpcI0yeMvpxrisUjs5FxXB98OKP5XXgUmBx7VAgxejRo0VdkJ6NvCR9I6dFLo0AJ98mSwPqJQepApYzthSwdDKSoloBSwHL9jSsVqy4aKQBDWordP5BedKxKI3QBx98YGiFnP8pKlhPGRkZePDBBy294V7VKiwstCi2zsM4wUHW+LvvvtvCbnavIQay5kejUQPvQw89BLKA64nGSNdMeiKF/t133zV8Rgq0tG1uPK+88gp27dpl+GrNmjVYu3at4/Apz/qkSZMsfFw2Hm43okCO77//3lB+wIABoD8nqqurA6WEMpMnYHGNkuJ+5ZVXGr6yiyvkytP1C73ckAilIiU2d6XD9c1NFLZ0bNwltLSsHR8HLMoBtnjxYkMRaSBHk/m8K2B5nfp4eQUsnSwVsBSwSAJqK3TAgdoKGxeQ7VZYXFycsOWda5KS6N9///0iHYt71Oj222/Hjh07DOW7dOmCNm3aGD47dOiQJeenGx3ryy+/RF5enqFOznVl+vTpluhfbtzk7rNgwQLLV9wYpWsa94AARVZzxlA7vc/8OWd5JyXfbNR+4IEHRGmZjh8/DoqStyjvnNuMlwSo3ADdJAXhyr/11luW6x/OhuYGWFw7UnODFBixLYF54UxanlOgCWw33XSTqArOONtkc6uAFZ8jBSwRXkW7Eevd0GSoFv6a1YoVn0u1Yulwfbq3woEDB4p+iq+++iroIaJkkl3bpHvV1tY22pTaCh1m4nQDK5lASVZdpOybDynmuls0sJJ9V+hG8JxyyVnevW6FbvrUVLxmYHH6nVcDqdSzghuztG3bRUMBq6mgZGxHAasRuXvNUaVWrLi9Tq1YOqC1aGDV1gF79gK79kA7cBCoqobP5O3gei2jU25ONtC+HXDBecD55534nyG1Yp2JK1blMWj/uw6+jz+D9rf9QE0tEA67xhFbIBAAKG9oh3bAVUPgu3oo0LrAwqqAlQRgeT0VSmdc5LpSWwfts5XQFiwCyg9Jq06MryAPvltuhO+GawFTdLcEWFyjbuxYXHkvbjNu2vZ0CS3dCpsTsLRtZcDst6GV7QI0eXaBBk4SmCvq2hm+saPh61tsKKaAdYatWNEly4B570GrPCbDB+lN554DdCkE6PFK2joPlMtBmZkJ3503w3/nPylgeQmm4GarOa1YkTfnIbroLzKdyueDr0shfDdeB//gAUAwiOia9dAWLoG2e68MXH4//MOuROBxoweAWrHOsBUr8ofXEFn2Vx4UuTkxECAUgvbdViAjHf6S6+Ef1B/IPpkBp64e0fUbEF24FNr2nTFeJwoMGYjApH9TK1b//v1FLyL8/PPPFid8TsiBQMDy6gLxkXXXTPfdd5+lzieeeALXXnutgfX9998H3e3pSaK8h6b/EdHlK1gs+Nq3RXD6VGh1dYh+vgq+rp3h798XyM055f4Ss73V1CC6cTMiCxZBK9sJRIxBGebK/Zf1Q3CKMTqcgiQo9VEDUeSPxM/q8OHD2LJli6EJeubuvffes4zJHHtADNxuVFpaCqpXT+SIQH96Ih7ildBpzUF6OgykoemzELEDVocOSH/lRWhpgRN2rYL82Kpl9qmK9bs+FFu5Iu/8CdFduxvdFglY6VOebHQ+zopIaAkik8HT3ICFju2R8cfpQH4uNHrhvrIK0KJARkZsK/QHg4Zha6EQot9sRPi//gfa7j1AOMKKRQErGWhxUcfpAFb9izYrFulTxT2R/sSj0KqrEP2lAr70IHx5uTHruS87Gz4TsGioWjiMyIbNiPz5Q0S3bAfIFcZkxQgMUiuWC1h4Zz0dwKp7cRbCyz83dj49HYHeRUgbMQy+vDxEDxyEv0sn+DsXxgybPjIzNEJaJILo1u0ILf4Y0bXroZElX0eBy/ojc6raCsWIufzyy8X+11ylnLJKz5aZFclrrrkGF198saEKik6mgAg9SZR3C7BopepdhOBNI4DsbEQ3lSLQpwj+bl3go1RDQi9XrT6EyK7vEf7zEkTWfXPimugkSYBFhxE6DOlp2bJl+OSTTwyf0dN5Y8aMMXwWDoctZYnBrHzTZ/feey/y8/MN5efOnQt6Fi+Z5El5516HcNM5L4EGXDuugZUWgH9gPwRvvwn+dm0R/sun8P/mAgT6FsOXlmZoIlp+CFpVNQJ0scxQbPWlleunnxF6/0NEVqwGSE8DIAEWV6fXdNxSfywuEtrNPHK8Zx2wal94GaGGrdDvh69DO/jOaRNbmQKFHZE+djT8pFfpKFJ+CPUffwZUHEFwxLVIu7C7RZZ1iz5CZO030GproVUcgbbvQAxoRGmD+iNr6lOu50oBy7XIThQ4HSvW8RdeRv0nf7X02Jedhcwx/4z0G66DLy2A2K9d0xA9/AtCn60E0tPhC6Qh8rd9SL/udwh07xYDY8MYQp+uQM3s/0C04qil7uDgAchRwJKjpCVuhcdfmIn6T0zKO4E8LxfZT/8r0v6hTwwsWjSK6MFDCH2zEdGf9yH06efQqmuQTtc7rfJjfASuhi0zvLUM1VNfgFZuNDSSNIOD+iPn90/LBXuSs0WvWFwOUqkEOnfubEn7QymMzFZySnDPvSfNpZT88MMPUVFRYejCoEGDLO1Qwvyvv/7awEcR05TDtIFISb355psNPNUELLrSMZGvIC+2qqT1+vsTwKqvR3jzNoRJIV+/EZHvSqGFIwj89u8QHHAp/B3aIziwH/wnHfnCu39A9dO/R5QuqE1EK1auCVgLFy50fJOaDjfmAw5FEY0fP97Qgt2b0BQrIKFZs2ZZUjWRvmp+eIFSP5Gnq56CwSAop6pFnl4eEJBm9LOL70+2ucE8OAqZ37lzpxFY02aijtsK83KR8+RjCPa/NGZe0CJRRMvLEd66HZFtOxD6dhO0uhCCfYoQuKA70nr+FoFuXeELnlDyQ6VbUT11OqKH+BUr7/lnDP1INEqHA4odsCSgsuORRgjZOhicbcCqmkZboXXFIq/PrH+5HZm3jjy1vcXsU4d/RXjzFoTLdsZWsbRuXZDWuxiBzp1OgYomp3bpMtTM+U9oR63uOLQVKmC5gHlLXLGOTZuBOmYrRCCA9D5FyH3m3+EviCcLielaR44i9PU30H45gvShg+Dv2N5gNKVL6yqqd/Va1tshffAA5KsVS46sMwpYpMAX5CN77GhkXXeNRQjRquqYXcrfprXlu7pV/4eqWW9AY7ZBYj4rgeXl9S+ykpsT1/ft2xdz5swxCN8u1Q25ipiJS2M0ZcoU3HjjjQZWrm3Kf0q6SwPRQwR0GNBT5bQ/oJZbsYiJbFkXno+8cfcj2LMHezeor4vuCUM7vkfV7LkIl24DbKJ8CFitnn/W0A8ySuoVc8o/Wl1dbeCRphKim4oJEybIVwQB59ixYy1pjDifd1cBq4J2XbE0Jw/SyhdmoubjTy0XxacGlBZAenEvZN1SgvTiniD7Fuc2Q4bQ0NYy1HywFHVrvwbqbaJ8fEDGkMvQysHckAq3GVeTJGBWwGpESJWvvInjC5cCkUbCvfx+BLp2QcagAcjoU4S087vHbFe0opGvfGjPXtRv2oza1WsQ2f1D427Ofj8y//FqtJr4WKNTp4AlQLaZpTmtWNXvL8axt/4b0WNVjiPxZWUhUNgBaR3axwyotHJFq6sROVCO8L79sbtDJ/JlZiD3rtuQd4/V1qMvq4DlJEnm++YErLpNpTg6azbCu3afuLZJMaV1KkT+ww8g67J+asVKtqybE7CiNTU4/tFyVM7/EyKHf0n2UA310WV23q0jkXvrSPhzcs4uYHkxkEpnxY3lnauTnkebN2+etLlTfJzlnb6M/FqB45+tRNWSZYgcLI8ZPsle5SaAle0MXUqTU2AwDWnnnoPsq4cip2Q40to6P9EnHZybaGSuTi+R0Fx9tlmTz0ZgkYCix2tQt2Ub6rftQHj/fkSPVQPRiP1p0WnmyQGJYghzsmM6WfCi3yCz58Xw5xszMztV4/S9ApZOQs1txXKavOb8vQKWAlZK8KmApYB1dgOroKDAcub+7rvvkvous91WSKdFM61atQq9evUyfExXQuTTpSd6yuypp4zuvhRoQOUbyO/3WwIHUjLbTVgpt2KRHxrNmYTIR43koie6SgqZUgXQ9Rj96emjjz6yPJ1HJpvKykpL057SGEkGQjx2wOLKU/SN2cGM43PzMoW0nw8//DDMT5TQZ7fddptjFeT3RREw3A/FsbALBg5Ydm9Cu6hWxOpmG1bA0omUs37PmDED3IOd5pkgQPbu3dsyQck2wipg6UTcUlYsBazGFy61YokWdiuTAlYSgbVixQqL8k5vAZsVN65Jit6lt4ydiCJ1v/rqKwub2TGfGGbPno0DBw4YeCdOnGgJ0HCjYxFgzLR06VLk5hrjB1MBrKFDhzqJJ/Y9jcesW5K/mtlnrUePHrjjjjsMddJcSd5vpkJU1izf559/nk0zZe64qxXLi+VdmoPUTrLJDqZw86wcRQK1atXK0LVUAEuEKiAW/WL+AUjDv6RtEB/3ABc9GE+Oh06kgGWSEBcYq4AVF5IClg4wbrZCBay44NSKpQOR10eaFLBOA7AmT55sUd7JbmPWP2h/NRsP16xZY0mzQ8Y6cnNJlEh5P3jwoKF4SUmJyGhq1yYFY5iJ2wqleUC5dkghfuONN0TDppyq5sMRycycdojTsShYxKy8ixo9yUQrPb0rrSduK6QodS5SXdqW2EAq9YmiU5C0Q16SgnB5I+yMlJwwOGBxfNJX7KUCJz5p29Kn3dy0zfFywPJ6cFDAcpgVBay4gGjnoJ1LQgpYClhQK5YOBGorlKwbMp6UAKukpMSivL/55pto166doVeU6ubzz615pcxdJ9cVsuRKSGKUo3q+/fZb/PTTT4Yq3QCLlnAzUeqddMox6kDr1q0DpUzSE6XzIS8MCXFtUxR3jim4YvXq1Zbcq/QowIIFCwzNUJooeuAhUVq+fLnh4QKqRwqsfv364cknG0/S29AvnxfLe6KDc1uOOzi4ARZn4adTr/l0xPWL826g0+Po0aNFw5B6N0jjCt3oOVwHpXYsrwcHBSwHeChgiX4/FiYFLAUs8VboBmIKWApYqQHWnj17Uh9n7gLqhYWFFqWaUvSQi46eyA140qRJhs/sDKQUpGmmoqIiHDvm/Bjms88+a3E5psT+06ZNM1RJPvn79++3tCPVsciaTjcZeiIHSbMeyOlYbh4QkOpYZKGnPz1R7MGhQ8bnjsnITemizOQpz7sLvIhZpT7vXIVuLO/iDjGMo0aNsvhJpcI1WWr9tstByoFaCixOPs0ujZGbSVTAiktLAcsNchx4FbAUsJIIp3hVClgKWApYOgkoHcsIB/EldCpQxLnNcCtWKizv3HikPu+psLxz/ZHqWG7mhlPe3ZSX8ipg6SSlgCWFjTOfApYCljNKEuBQwFLASgA2zkUUsBSwnFGSAIcYWNy1irQ9Sp3DpdmRKu/08kJVlTF9NtXZpk0bQxfoWmXfvn2WbnGR0NQf89vIFBBRS6/Q64givc3XSfRsHkVn64l8toYPH25pm4JLzMS1LVXes7KyLL5y0nkgPnp3OnLy5deGchQEMmzYMDfVnOKlFEYUKGwmMbCkwRRc79xkTfZix7KTjDT8iyvP+by7udLh6mwJwRRSlNkmtwWTzpXLrKuAFRe1AlZcFgpYpp+gdNVQK1bja5cClgKWLUKkuRu4Clo0sLhAjhtuuAFjxowRqQJcLBwp2vSesRNxKxbl/KS3mfVEBwnz03d2dXNtP/PMMygtLTUU2b59O8rKygyfcQEN5eXloCfoEiWqs2PHjgkVp4AU9k3olqBjSa90EpKMQyFpwKpdCiVpn7wEU6TiTWhpv129V9jclHcFrPg0cx6kClimn4HUjqWApYDFrqBe7VgKWApYKQEWl0KJa4iihOktYzOR+4mZyHJuTiXkJY2RnU7Ctc3xetGx6GRmDnyw6w+XxkiqT7lJodRiLe8tJaOfNErHC7CkwCA+L/5YnH7Xos0NnOAUsNzAKc6rgOUgNwUsBSx4Vd7VitW48u4GYs1uxZKmMeIGSSl7KHWPmaTmBq7OJUuWYO7cuYavunfvDkriYSYuXRKXSkjqmkxpjCi1kp7I9vf4449b2qbrEgmR5X3Lli2OrJyeQxHKlJ5IQuQCZHZBkpQjHop4vuqqqwzs5Ko0f/5869xKLe/Sxt3weQGWm3akvFJguQmmkLYt5fNqIOWM39K2PUdCe2lc2kniU8ByI60TvApYApkpYAmEZGJRwBLITAFLIKQzCVibNm1K6tO9duJr3bq15SvONZl7uperMxAIIC8vz/IVGfHMRCdVM7ClOhYpq+PGjTNUSX7kiSrFbuB1/fXXWw5C5Mc+ePBgSzVcKkxOzZE+3etZx3Iz0GTzSiOhuXZb8utfXuRo93QvtyNwwKJT8+LFiw1dmDx5MszXUQpYplmSBlNIVywOBE2Vm4trWwFL8LNUK5ZASCYWBSyBzBSwBEJSwHIvJAUs9zJrjivW/wPH6RJ8c6hdFwAAAABJRU5ErkJggg=="></div>
							</div>
						</li>-->
						<li data-v-1d3b09fb="">
							<h4 data-v-1d3b09fb="">扫码关注金融服务号</h4><img data-v-1d3b09fb="" src="http://img.xindaikuangren.com/zmhkewm0702.jpg" style="width: 140px;"></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'massageDetail',
		mounted(){
			this.getRouterNum();
		},
		created(){
			this.getMassageDetail();
		},
		data() {
			return {
                show:false,
                show1:false,
                show2:false,
                massageDetail:[]
			}
		},
		methods:{
			mouIn(){
				this.show = true;
			},
			mouleave(){
				this.show = false;
			},
			getRouterNum(){
				let num = this.$route.params.num;
				if(num == 1){
					this.show1 = true;
				}else{
					this.show2 = true;
				}
			},
			getMassageDetail(){
				var _this = this; 
				$.ajax({
					type:"post",
					url:"http://ex.xindaikuangren.com/index/article/detail",
					data:{
						atype:this.$route.params.atype,
						id:this.$route.params.id
					},
					async:true,
					success:function(res){
						if(res.code == 200){
							_this.massageDetail.push(res.data);
						}						
					},
					error:function(error){
						
					}
				});
			}
		}
	}
</script>
<style type="text/css">
	.bar .share .icon:hover .bar .share .sub{
		display: block;
	}
	.bar .share .sub:hover {
		display: block;
	}
</style>
<style scoped="scoped">
	.news-detail[data-v-1d3b09fb] {
		background: #fff;
	}
	
	.page-content[data-v-f774ee1a] {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		height: 100%;
		width: 100%;
		background: #f9fafb;
	}
	
	.content {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.qr[data-v-8fe6e6f4] img {
		width: 100%;
	}
	
	.bar .share .icon[data-v-1d3b09fb]:hover .bar .share .sub[data-v-1d3b09fb] {
		display: block;
	}
	.bar .share .sub[data-v-1d3b09fb]:hover {
		display: block;
	}
	@media screen and (min-width: 769px) {
		.main[data-v-1d3b09fb] {
			position: relative;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
		}
		.crumbs[data-v-1d3b09fb] {
			font-size: 14px;
			color: #999;
			padding-top: 36px;
			padding-bottom: 24px;
		}
		.max-show {
			display: block!important;
		}
		.article[data-v-1d3b09fb] {
			max-width: 810px;
			padding-bottom: 20px;
		}
		.title[data-v-1d3b09fb] {
			font-size: 36px;
			color: #404040;
			line-height: 48px;
			padding-bottom: 54px;
		}
		.bar[data-v-1d3b09fb] {
			height: 44px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			margin-bottom: 20px;
		}
		.bar .thumb[data-v-1d3b09fb] {
			width: 40px;
			height: 40px;
		}
		.bar .author[data-v-1d3b09fb] {
			padding-left: 10px;
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
		}
		.bar .author h5[data-v-1d3b09fb],
		.bar .author p[data-v-1d3b09fb] {
			font-size: 14px;
			color: #666;
		}
		.bar .author p[data-v-1d3b09fb] {
			font-size: 14px;
			color: #666;
		}
		.info[data-v-1d3b09fb] {
			padding: 8px;
			color: #444;
			font-size: 18px;
			line-height: 32px;
		}
		.code[data-v-1d3b09fb] {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
			text-align: center;
			max-width: 390px;
		}
		.code ul[data-v-1d3b09fb] {
			margin: 0 auto;
			display: inline-block;
			vertical-align: top;
		}
		.code li[data-v-1d3b09fb] {
			margin-bottom: 56px;
		}
		.code li h4[data-v-1d3b09fb] {
			color: #666;
			font-size: 14px;
			line-height: 20px;
			padding-bottom: 12px;
		}
		.code li[data-v-1d3b09fb] img {
			width: 120px;
			margin: 0 auto;
		}
		.bar .share[data-v-1d3b09fb] {
			height: 44px;
			margin-right: 80px;
		}
		.max-show {
			display: block!important;
		}
		.bar .share .text[data-v-1d3b09fb] {
			margin: 0;
			padding-right: 8px;
			color: #666;
			font-size: 14px;
		}
		.bar .share .text[data-v-1d3b09fb] {
			position: relative;
			display: inline-block;
			vertical-align: top;
			height: 44px;
			margin: 0 10px;
			line-height: 44px;
		}
		.bar .share .icon[data-v-1d3b09fb] {
			cursor: pointer;
		}
		.bar .share .icon[data-v-1d3b09fb],
		.bar .share .text[data-v-1d3b09fb] {
			position: relative;
			display: inline-block;
			vertical-align: top;
			height: 44px;
			margin: 0 10px;
			line-height: 44px;
		}
		.bar .share .sub[data-v-1d3b09fb] {
			position: absolute;
			z-index: 99;
			top: 0;
			right: 60px;
			/*display: none;*/
		}
		.bar .share .icon[data-v-1d3b09fb]:hover .bar .share .sub[data-v-1d3b09fb] {
			display: block;
		}
		.bar .share .sub[data-v-1d3b09fb]:hover {
			display: block;
		}
		.bar .share .sub .code[data-v-1d3b09fb] {
			padding: 18px;
			width: 156px;
			background: #fff;
			position: relative;
			-webkit-box-shadow: 0 0 20px 1px hsla(0, 0%, 76%, .24);
			box-shadow: 0 0 20px 1px hsla(0, 0%, 76%, .24);
		}
		.code[data-v-1d3b09fb] {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
			text-align: center;
			max-width: 390px;
		}
	}
</style>