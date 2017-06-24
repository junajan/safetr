var express = require('express');
var passport = require('passport');
var router = express.Router();

var emailParser = require('../model/email')

router.get('/', function (req, res, next) {
  res.render('index', {sess: req.session});
});

router.post('/user', function (req, res) {
  if(req.user) req.user.info = req.body

  res.json({
    ok: true
  })
});

const test = '<div dir="ltr"><div><div class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><div><div dir="ltr"><div><div dir="ltr"><div>---------- Forwarded message ----------<br></div></div></div></div></div></div></div></div><div class="gmail_quote">From: <b class="gmail_sendername">Kiwi.com</b> <span dir="ltr">&lt;<a href="mailto:tickets@kiwi.com">tickets@kiwi.com</a>&gt;</span><br>Date: 2017-06-24 2:02 GMT+02:00<br>Subject: Booking 3399434: Booking received<br>To: <a href="mailto:mail@janjuna.cz">mail@janjuna.cz</a><br><br><br><u></u>\n\n\n\n\n\n\n\n\n\n\n\n<div style="font-size:14px;font-family:Helvetica,sans-serif;line-height:1.4;background:#fff;margin:0;height:100%;width:100%;padding:0;color:#2f2f2f">\n\n\n<table class="m_9038155329588133828Header" width="100%" border="0" cellpadding="0" cellspacing="0"><tbody><tr>\n<td align="center" valign="top">\n\t\t\t<table class="m_9038155329588133828Header-container m_9038155329588133828Header-bg m_9038155329588133828container" align="center" width="500" border="0" cellpadding="0" cellspacing="0" style="table-layout:fixed;width:500px;min-width:500px;max-width:500px;height:240px;min-height:240px;max-height:240px;margin-bottom:20px">\n<tbody><tr class="m_9038155329588133828Header-logos" style="margin-bottom:30px;text-align:center;color:#ffffff;width:500px;min-width:500px;max-width:500px;background-color:#0097a9">\n<td colspan="2" width="100%">\n<div class="m_9038155329588133828Header-logos-wrapper">\n\t<table style="margin:0 auto;table-layout:fixed;width:100%"><tbody><tr>\n<td>\n\t\t\t\t<img class="m_9038155329588133828logo-medium" src="https://d2izvikajmfdi4.cloudfront.net/images/brand/kiwicom/logo-email-header-primary.png" alt="logo" style="width:50%">\n</td>\n\t\t</tr></tbody></table>\n</div>\t\t\t\t\t</td>\n\t\t\t\t</tr>\n<tr class="m_9038155329588133828Header-preheader" style="color:#0097a9;font-size:1px;background-color:#0097a9"><td colspan="2" width="100%">Your order is in process.</td></tr>\n<tr class="m_9038155329588133828Header-important" style="text-align:center;color:#ffffff;width:500px;min-width:500px;max-width:500px;background-color:#0097a9">\n<td class="m_9038155329588133828Header-important-bid" style="text-align:center;vertical-align:top;width:50%">\n\t\t\t\t\t\t<table border="0" cellpadding="0" cellspacing="0" style="width:100%;table-layout:fixed">\n<tbody><tr><td class="m_9038155329588133828Header-important-bid-label" style="padding:0;height:20px">Booking number:</td></tr>\n<tr><td class="m_9038155329588133828Header-important-bid-value" style="padding:0 20px;height:55px;font-size:35px;color:#ffcc00">3399434</td></tr>\n</tbody></table>\n</td>\n\t\t\t\t\t\t<td class="m_9038155329588133828Header-important-bstatus" style="text-align:center;vertical-align:top;width:50%">\n\t\t\t\t\t\t\t<table border="0" cellpadding="0" cellspacing="0" style="width:100%;table-layout:fixed">\n<tbody><tr><td class="m_9038155329588133828Header-important-bstatus-label" style="padding:0;height:20px">Booking status:</td></tr>\n<tr><td class="m_9038155329588133828Header-important-bstatus-value" style="padding:0 20px;height:55px">\n\t\t\t\t\t\t\t\t\t<div class="m_9038155329588133828button m_9038155329588133828button_grey" style="display:inline-block;font-size:15px;line-height:14px;padding:10px;text-align:center;font-weight:normal;text-decoration:none;border-radius:4px;color:#ffffff;background-color:#4d5052">\n<span><strong>IN PROCESS</strong></span><div>\n\t\t\t\t\t\t\t\t</div>\n</div>\n</td></tr>\n</tbody></table>\n</td>\n\t\t\t\t</tr>\n<tr class="m_9038155329588133828Header-support" style="text-align:center;color:#ffffff;width:500px;min-width:500px;max-width:500px;background-color:#0097a9">\n<td colspan="2">\n\t\t\t\t\t\t<div class="m_9038155329588133828Header-support-wrapper" style="padding-top:20px;padding-bottom:40px">\n\t\t\t\t\t\t\t<table border="0" cellpadding="0" cellspacing="0" style="width:100%;table-layout:fixed">\n<tbody><tr>\n<td>Don&#39;t hesitate to contact us if you have any questions:</td>\n\t\t\t\t\t\t\t\t</tr>\n<tr>\n<td>\n\t\t\t\t\t\t\t\t\t<div class="m_9038155329588133828Header-support-phone" style="margin-top:5px;color:#ffffff!important">\n<img class="m_9038155329588133828icon" src="https://d2izvikajmfdi4.cloudfront.net/images/ic_phone.png" alt="phone" style="height:20px;line-height:20px;min-height:20px;max-height:20px;vertical-align:middle;margin-right:5px"><strong><a class="m_9038155329588133828spWhiteLink" style="text-decoration:none!important;color:#ffffff!important">+1 2028444159</a></strong>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t    </td>\n\t\t\t\t\t\t\t\t</tr>\n</tbody></table>\n</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n</tbody></table>\n</td>\n\t</tr></tbody></table>\n<table class="m_9038155329588133828section m_9038155329588133828section-header" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:20px"><tbody><tr>\n<td align="center" valign="top">\n\t\t\t<table class="m_9038155329588133828container" width="500" border="0" cellpadding="0" cellspacing="0"><tbody><tr>\n<td class="m_9038155329588133828container-padding">\n\t\t\t\t\t\t<div class="m_9038155329588133828content" style="text-align:center">\n\t\t\t\t\t\t\t<div class="m_9038155329588133828text">\n\t\t\t\t\t\t\t\t<p style="margin:0">\n\t\t\t\t\t\t\t\t\tDear Customer,\n\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\tThank you for choosing Kiwi.com. We have received your order and we are now processing it.\n\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\t\tWe will send your booking confirmation and your e-ticket within 4 hours\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr></tbody></table>\n</td>\n\t</tr></tbody></table>\n<div id="m_9038155329588133828snippet--flights">    \n \n\t<table class="m_9038155329588133828section m_9038155329588133828section-flight m_9038155329588133828new-segment" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:0px;margin-top:20px"><tbody><tr>\n<td align="center" valign="top">\n\t\t\t\t<table class="m_9038155329588133828container" width="500" border="0" cellpadding="0" cellspacing="0"><tbody><tr>\n<td class="m_9038155329588133828container-padding">\n\n\t\t\t\t\t\t\t<div class="m_9038155329588133828content">\n\t\t\t\t\t\t\t\t<div class="m_9038155329588133828wrapper" style="padding:20px;border:1px dotted #a1a1a1">\n\t\t\t\t\t\t\t\t\t<table class="m_9038155329588133828table m_9038155329588133828content" style="width:100%">\n<tbody><tr class="m_9038155329588133828flight--from">\n<td class="m_9038155329588133828flight--icon" style="text-align:center;width:24px;white-space:nowrap;padding:2px 5px"><img src="https://d2izvikajmfdi4.cloudfront.net/images/plane_up_v2.png" width="20" height="15" alt="outbound"></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="m_9038155329588133828flight--datetime" style="width:100px;white-space:nowrap;padding:2px 5px">\n<strong>Jul 22</strong> 11:20</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="m_9038155329588133828flight--duration" style="width:60px;white-space:nowrap;padding:2px 5px">3h 5min</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="m_9038155329588133828flight--place" style="font-weight:bold;padding:2px 5px">Prague (PRG)</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n<tr class="m_9038155329588133828flight--to">\n<td class="m_9038155329588133828flight--icon" style="text-align:center;width:24px;white-space:nowrap;padding:2px 5px"><img src="https://d2izvikajmfdi4.cloudfront.net/images/plane_down_v2.png" width="20" height="15" alt="inbound"></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="m_9038155329588133828flight--datetime" style="width:100px;white-space:nowrap;padding:2px 5px">\n<strong>Jul 22</strong> 14:25</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="m_9038155329588133828flight--spacer" style="padding:2px 5px"></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="m_9038155329588133828flight--place" style="font-weight:bold;padding:2px 5px">Madrid (MAD)</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n</tbody></table>\n<p class="m_9038155329588133828flight--airline" style="margin:0;margin-top:10px">\n\t\t\t\t\t\t\t\t\t\tAirline: <strong>Czech Airlines</strong>\n\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t</p>\n</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr></tbody></table>\n</td>\n\t\t</tr></tbody></table>\n<table class="m_9038155329588133828section m_9038155329588133828section-flight m_9038155329588133828new-segment m_9038155329588133828last-segment" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:20px!important;margin-top:20px"><tbody><tr>\n<td align="center" valign="top">\n\t\t\t\t<table class="m_9038155329588133828container" width="500" border="0" cellpadding="0" cellspacing="0"><tbody><tr>\n<td class="m_9038155329588133828container-padding">\n\n\t\t\t\t\t\t\t<div class="m_9038155329588133828content">\n\t\t\t\t\t\t\t\t<div class="m_9038155329588133828wrapper" style="padding:20px;border:1px dotted #a1a1a1">\n\t\t\t\t\t\t\t\t\t<table class="m_9038155329588133828table m_9038155329588133828content" style="width:100%">\n<tbody><tr class="m_9038155329588133828flight--from">\n<td class="m_9038155329588133828flight--icon" style="text-align:center;width:24px;white-space:nowrap;padding:2px 5px"><img src="https://d2izvikajmfdi4.cloudfront.net/images/plane_up_v2.png" width="20" height="15" alt="outbound"></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="m_9038155329588133828flight--datetime" style="width:100px;white-space:nowrap;padding:2px 5px">\n<strong>Jul 22</strong> 21:30</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="m_9038155329588133828flight--duration" style="width:60px;white-space:nowrap;padding:2px 5px">2h 10min</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="m_9038155329588133828flight--place" style="font-weight:bold;padding:2px 5px">Madrid (MAD)</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n<tr class="m_9038155329588133828flight--to">\n<td class="m_9038155329588133828flight--icon" style="text-align:center;width:24px;white-space:nowrap;padding:2px 5px"><img src="https://d2izvikajmfdi4.cloudfront.net/images/plane_down_v2.png" width="20" height="15" alt="inbound"></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="m_9038155329588133828flight--datetime" style="width:100px;white-space:nowrap;padding:2px 5px">\n<strong>Jul 22</strong> 22:40</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="m_9038155329588133828flight--spacer" style="padding:2px 5px"></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="m_9038155329588133828flight--place" style="font-weight:bold;padding:2px 5px">Marrakech (RAK)</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n</tbody></table>\n<p class="m_9038155329588133828flight--airline" style="margin:0;margin-top:10px">\n\t\t\t\t\t\t\t\t\t\tAirline: <strong>Ryanair</strong>\n\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t</p>\n</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr></tbody></table>\n</td>\n\t\t</tr></tbody></table>\n</div>\n\n<div id="m_9038155329588133828snippet--booked_by"> <table class="m_9038155329588133828section m_9038155329588133828section-booked-by" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:20px"><tbody><tr>\n<td align="center" valign="top">\n\t    <table class="m_9038155329588133828container" width="500" border="0" cellpadding="0" cellspacing="0"><tbody><tr>\n<td class="m_9038155329588133828container-padding">\n\t\t\t<div class="m_9038155329588133828content">\n\t\t\t    <div class="m_9038155329588133828wrapper" style="padding:20px;border:1px dotted #a1a1a1">\n\t\t\t\t<table class="m_9038155329588133828table" style="width:100%">\n<tbody><tr>\n<th style="padding:2px 5px;white-space:nowrap;font-weight:normal;text-align:left">Booked by</th>\n\t\t\t\t\t<td style="padding:2px 5px"><strong id="m_9038155329588133828editBookedBy">TEST TEST</strong></td>\n\t\t\t\t    </tr>\n<tr>\n<th style="padding:2px 5px;white-space:nowrap;font-weight:normal;text-align:left">Email</th>\n\t\t\t\t\t<td style="padding:2px 5px"><strong id="m_9038155329588133828editEmail"><a href="mailto:mail@janjuna.cz" target="_blank">mail@janjuna.cz</a></strong></td>\n\t\t\t\t    </tr>\n<tr>\n<th style="padding:2px 5px;white-space:nowrap;font-weight:normal;text-align:left">Total paid</th>\n\t\t\t\t\t<td style="padding:2px 5px">\n\t\t\t\t\t    <strong id="m_9038155329588133828editTotalPaid">\n\t\t\t\t\t\t4805 CZK\n\t\t\t\t\t    </strong>\n\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n</tbody></table>\n</div>\n\t\t\t</div>\n\t\t    </td>\n\t\t</tr></tbody></table>\n</td>\n    </tr></tbody></table>\n</div>\n\n<div id="m_9038155329588133828snippet--passengers"> <table class="m_9038155329588133828section m_9038155329588133828section-passengers" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:20px"><tbody><tr>\n<td align="center" valign="top">\n\t\t\t<table class="m_9038155329588133828container" width="500" border="0" cellpadding="0" cellspacing="0"><tbody><tr>\n<td class="m_9038155329588133828container-padding">\n\n\t\t\t\t\t\t<div class="m_9038155329588133828content">\n\t\t\t\t\t\t\t<p class="m_9038155329588133828passanger" style="margin:0">\n\t\t\t\t\t\t\t\t<img src="https://d2izvikajmfdi4.cloudfront.net/images/passenger_grey.png" class="m_9038155329588133828icon" alt="passengers" style="float:right">\n\t\t\t\t\t\t\t\tPassengers - 1:<br></p>\n<div>\n\t\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t\t    Mr.\n\t\t\t\t\t\t\t\t\t\tTest\n\t\t\t\t\t\t\t\t\t\tTest\n\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</td>\n\t\t\t\t</tr></tbody></table>\n</td>\n\t</tr></tbody></table>\n</div>\n\n<div id="m_9038155329588133828snippet--luggage"> <table class="m_9038155329588133828section m_9038155329588133828section-luggages" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:20px"><tbody><tr>\n<td align="center" valign="top">\n\t\t\t<table class="m_9038155329588133828container" width="500" border="0" cellpadding="0" cellspacing="0"><tbody><tr>\n<td class="m_9038155329588133828container-padding">\n\n\t\t\t\t\t\t<div class="m_9038155329588133828content">\n\n\t\t\t\t\t\t\t<p class="m_9038155329588133828luggage" style="margin:0">\n\t\t\t\t\t\t\t\t<img src="https://d2izvikajmfdi4.cloudfront.net/images/luggage_grey.png" class="m_9038155329588133828icon" alt="luggage" style="float:right">\n\t\t\t\t\t\t\t\tBaggage:<br><strong>1× Cabin baggage - 55 × 40 × 20 cm | 8 kg</strong><br><strong>0× Checked baggage - 15 kg </strong>\n\t\t\t\t\t\t\t\t<br></p>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</td>\n\t\t\t\t</tr></tbody></table>\n</td>\n\t</tr></tbody></table>\n</div>\n\n<table class="m_9038155329588133828section m_9038155329588133828section-footer" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:20px"><tbody><tr>\n<td align="center" valign="top">\n\t    <table class="m_9038155329588133828container" width="500" border="0" cellpadding="0" cellspacing="0"><tbody><tr>\n<td class="m_9038155329588133828container-padding">\n\t\t\t<div class="m_9038155329588133828content" style="text-align:center">\n\t\t\t    <p style="margin:0">\n\n\t\t\t\t\t</p>\n<p align="center" style="margin:0">\n\t\t\t\t\t\t\t<a href="https://mandrillapp.com/track/click/30178145/itunes.apple.com?p=eyJzIjoiVUo3cGt4RlVoTEV6djBNUEl6Q0NEZzlNMjNVIiwidiI6MSwicCI6IntcInVcIjozMDE3ODE0NSxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2l0dW5lcy5hcHBsZS5jb21cXFwvYXBwXFxcL2lkNjU3ODQzODUzXCIsXCJpZFwiOlwiZWU3ZGZjMTZmNTk4NGRmZjkyNGY5NmY2NmFmNzg0NGFcIixcInVybF9pZHNcIjpbXCIwZjUzYTdlZjU2ZmFlMjhlN2UwOGQwNzhkNWEzNzcwNDIzNjAwZTUwXCJdfSJ9" target="_blank"><img src="https://d2izvikajmfdi4.cloudfront.net/images/app_store_ios.png" alt="app-store"></a>\n\t\t\t\t\t\t\t<a href="https://mandrillapp.com/track/click/30178145/play.google.com?p=eyJzIjoiZzczd2l3ckNVdHNnX25mbGZadGdDWlh3OHVBIiwidiI6MSwicCI6IntcInVcIjozMDE3ODE0NSxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL3BsYXkuZ29vZ2xlLmNvbVxcXC9zdG9yZVxcXC9hcHBzXFxcL2RldGFpbHM_aWQ9Y29tLnNreXBpY2tlci5tYWluXCIsXCJpZFwiOlwiZWU3ZGZjMTZmNTk4NGRmZjkyNGY5NmY2NmFmNzg0NGFcIixcInVybF9pZHNcIjpbXCJhZGEyYzFiZjNlZWYwMDI0NzAzYjJiNTdmMmNmMjc3YTU2MDIyYjU1XCJdfSJ9" target="_blank"><img src="https://d2izvikajmfdi4.cloudfront.net/images/app_store_android.png" alt="google-play"></a>\n\t\t\t\t\t</p>\n\t\t\t\t\t<br><table class="m_9038155329588133828footer m_9038155329588133828footer-wrap-table" style="background-color:#0097a9"><tbody><tr>\n<td class="m_9038155329588133828footer-textbox" style="padding:10px;font-size:14px">\n\t\t\t\t\t    <div>\n\t\t\t\t\t\t<p class="m_9038155329588133828footer-main-content" style="margin:0;text-align:left;text-decoration:none;color:#ffffff">\n\t\t\t\t\t\t    Visit our <a href="https://mandrillapp.com/track/click/30178145/www.kiwi.com?p=eyJzIjoiX2RTWUlLa1NyZEc1S09JZVFYRHdUaWkxYXpVIiwidiI6MSwicCI6IntcInVcIjozMDE3ODE0NSxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL3d3dy5raXdpLmNvbVxcXC9oZWxwY2VudGVyXFxcL1wiLFwiaWRcIjpcImVlN2RmYzE2ZjU5ODRkZmY5MjRmOTZmNjZhZjc4NDRhXCIsXCJ1cmxfaWRzXCI6W1wiMzQyMjI2ZTMyOTU2YWM3YjQwZWI1MjM2NWNlZTJjYjlhMmZlNGM1YVwiXX0ifQ" class="m_9038155329588133828footer-faq" style="text-decoration:underline;color:#ffcc00" target="_blank">Help Centre</a> if you have any questions. Our Customer Support Team is available 24/7, so don&#39;t hesitate to contact us.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class="m_9038155329588133828footer-text" style="margin:0;text-align:left;text-decoration:none;color:#ffcc00">Thank you for using Kiwi.com. We wish you a pleasant journey.</p>\n\t\t\t\t\t    </div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class="m_9038155329588133828footer-infobox" style="padding:10px;font-size:14px">\n\t\t\t\t\t    <div class="m_9038155329588133828footer-logo">\n\t\t\t\t\t\t<img alt="logo" src="https://d2izvikajmfdi4.cloudfront.net/images/brand/kiwicom/logo-email-footer.png" style="width:100px;margin:10px 10px 10px 10px">\n</div>\n\t\t\t\t\t    <div>\n\t\t\t\t\t\t<p class="m_9038155329588133828footer-phone" style="margin:0"><a class="m_9038155329588133828spWhiteLink" style="text-decoration:none;margin:0;color:#ffffff">+1 2028444159</a></p>\n\t\t\t\t\t\t<a href="https://mandrillapp.com/track/click/30178145/www.kiwi.com?p=eyJzIjoiU3REYk9GX3V0VDhTdTgwQS1TeVExNjFySGRNIiwidiI6MSwicCI6IntcInVcIjozMDE3ODE0NSxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL3d3dy5raXdpLmNvbVwiLFwiaWRcIjpcImVlN2RmYzE2ZjU5ODRkZmY5MjRmOTZmNjZhZjc4NDRhXCIsXCJ1cmxfaWRzXCI6W1wiZDI0OGJjMjRjNmU0NDAzYjA5MmI2ZTc0ZmIwODQ4YjNjNDk5NjliM1wiXX0ifQ" class="m_9038155329588133828footer-link" style="text-decoration:none;color:#ffcc00" target="_blank">www.kiwi.com</a>\n\t\t\t\t\t\t<p style="margin:0">\n\t\t\t\t\t\t\t\t<a href="https://mandrillapp.com/track/click/30178145/www.facebook.com?p=eyJzIjoicmtpeE9RanhnYmg2WDhXeVNTMGxvTFZsX24wIiwidiI6MSwicCI6IntcInVcIjozMDE3ODE0NSxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL3d3dy5mYWNlYm9vay5jb21cXFwva2l3aWNvbTI0N1wiLFwiaWRcIjpcImVlN2RmYzE2ZjU5ODRkZmY5MjRmOTZmNjZhZjc4NDRhXCIsXCJ1cmxfaWRzXCI6W1wiZmY2ZDFiYWE2MGNmNDg0MTIzOTg0M2ZmZDk5ZGMwNzdhZjY5MTY2ZFwiXX0ifQ" target="_blank"><img class="m_9038155329588133828media-icon-32" src="https://d2izvikajmfdi4.cloudfront.net/images/media/facebook_32x32.png" alt="facebook-icon" style="height:32px;width:32px"></a>\n\t\t\t\t\t\t\t\t<a href="https://mandrillapp.com/track/click/30178145/instagram.com?p=eyJzIjoiN291YVFVZ1dHcmFiTFpmNDQ1c2xsVjFFR0dZIiwidiI6MSwicCI6IntcInVcIjozMDE3ODE0NSxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2luc3RhZ3JhbS5jb21cXFwva2l3aWNvbTI0N1wiLFwiaWRcIjpcImVlN2RmYzE2ZjU5ODRkZmY5MjRmOTZmNjZhZjc4NDRhXCIsXCJ1cmxfaWRzXCI6W1wiZTI1NjljYmRkYzFkOThjYzg2NzlhOWNjYjJhZTlhN2NlN2I2MmJlMlwiXX0ifQ" target="_blank"><img class="m_9038155329588133828media-icon-32" src="https://d2izvikajmfdi4.cloudfront.net/images/media/instagram_32x32.png" alt="instagram-icon" style="height:32px;width:32px"></a>\n\t\t\t\t\t\t\t\t<a href="https://mandrillapp.com/track/click/30178145/twitter.com?p=eyJzIjoiSmNSOWt0OG5FY0ZZWmYxWnRlOTZLdEZmUHlRIiwidiI6MSwicCI6IntcInVcIjozMDE3ODE0NSxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL3R3aXR0ZXIuY29tXFxcL2tpd2ljb20yNDdcIixcImlkXCI6XCJlZTdkZmMxNmY1OTg0ZGZmOTI0Zjk2ZjY2YWY3ODQ0YVwiLFwidXJsX2lkc1wiOltcIjJmZDA3MjkwMzBjNzFmYzQwZjk4MmU5Y2IxODFmNWM3NTI1NGQ2ZDdcIl19In0" target="_blank"><img class="m_9038155329588133828media-icon-32" src="https://d2izvikajmfdi4.cloudfront.net/images/media/twitter_32x32.png" alt="twitter-icon" style="height:32px;width:32px"></a>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t    </div>\n\t\t\t\t\t</td>\n\t\t\t\t    </tr></tbody></table>\n</div>\n\t\t    </td>\n\t\t</tr></tbody></table>\n</td>\n    </tr></tbody></table>\n<img src="https://mandrillapp.com/track/open.php?u=30178145&amp;id=ee7dfc16f5984dff924f96f66af7844a" height="1" width="1"></div>\n\n</div><br></div>\n'

const res = emailParser.parse(test)
console.log(res)

process.exit() // TODO remove me

router.post('/email', function (req, res) {
  console.dir(req.body, { depth: 100 })


  const email = req.body

  const info = {
    from: email.from[0].address,
    to: email.to[0].address,
    userId: email.to[0].address.split('@')[0],
    subject: email.subject,
    html: email.html
  }

  info.parsed = emailParser(info.html);

  res.json({
    ok: true
  })
});


router.head('/email', function (req, res) {
  res.json({
    ok: true
  })
});


router.get('/profile', isLoggedIn, function (req, res) {
  res.render('profile', {
    user: req.user,
    trips: [{
      from: 'Czech Republic',
      to: 'Russia',
      date: '1.2.2017',
    }]
  });
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
}));

router.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/',
}));

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}
