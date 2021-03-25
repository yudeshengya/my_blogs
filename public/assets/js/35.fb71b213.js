(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{532:function(t,T,v){t.exports=v.p+"assets/img/image-20210323173431806.95b29a15.png"},568:function(t,T,v){"use strict";v.r(T);var _=v(6),a=Object(_.a)({},(function(){var t=this,T=t.$createElement,_=t._self._c||T;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"http2-的缺陷"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http2-的缺陷"}},[t._v("#")]),t._v(" HTTP2 的缺陷")]),t._v(" "),_("p",[t._v("与其说是 HTTP2 的缺陷，倒不如说是 TCP 的缺陷。")]),t._v(" "),_("p",[t._v("虽然 HTTP2 解决了应用层面的队头阻塞问题，不过它依然是基于 TCP 协议的。而 TCP 有一些让人不满意的地方")]),t._v(" "),_("h3",{attrs:{id:"tcp-队头阻塞的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-队头阻塞的问题"}},[t._v("#")]),t._v(" TCP 队头阻塞的问题")]),t._v(" "),_("p",[t._v("由于 TCP 是利用"),_("strong",[t._v("滑动窗口")]),t._v("来对数据进行按序接收和发送的，若发送方在发送数据的过程中有某个包丢失，那么排在后面的包会等待接收到发送方重传这个丢失的包后才会继续进行处理。")]),t._v(" "),_("p",[t._v("可以看到，在 TCP 传输过程中，"),_("strong",[t._v("由于单个数据包的丢失而造成的阻塞就称为 TCP 上的队头阻塞")]),t._v("。")]),t._v(" "),_("p",[t._v("另外，由于 HTTP2 的多路复用技术，每个 HTTP 报文共用同一个 TCP 连接，所以随着丢包率的增加，HTTP2 的传输效率也会越来越差。")]),t._v(" "),_("h3",{attrs:{id:"tcp-建立连接的延时"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-建立连接的延时"}},[t._v("#")]),t._v(" TCP 建立连接的延时")]),t._v(" "),_("p",[t._v("除了 TCP 的队头阻塞，TCP 的握手过程也是影响传输效率的一个重要因素。")]),t._v(" "),_("ul",[_("li",[t._v("在 TCP 建立连接的时候，客户端会与服务端进行三次握手建立连接，整个过程会消耗 1.5 个往返时间 RTT")]),t._v(" "),_("li",[t._v("在建立 TLS 连接的时候，也会有握手的过程，建立连接所消耗的时间大致需要 1到2 个 RTT")])]),t._v(" "),_("p",[t._v("所以在传输数据之前的建立连接过程就需要消耗3到4个 RTT")]),t._v(" "),_("h2",{attrs:{id:"http3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http3"}},[t._v("#")]),t._v(" HTTP3")]),t._v(" "),_("p",[t._v("现在我们知道 TCP 协议带来的队头阻塞和建立连接延时的缺陷，那么如何解决这些问题呢？")]),t._v(" "),_("p",[t._v("很直观的想法是改进 TCP 协议，但是在我们的传输链路上有非常非常多的设备采用的协议依旧是旧 TCP。如果我们采用了新的协议，当新协议的数据包经过这些设备时，它们可能不理解包的内容，进而直接将这些数据直接丢弃。")]),t._v(" "),_("p",[t._v("因此要更新非常核心的 TCP 协议是不现实的。")]),t._v(" "),_("p",[t._v("但是解决问题的思路依旧是绕过 TCP 协议，发明一个 TCP 和 UDP 之外的新的传输协议，但这也面临着设备不认识的情况。因此 HTTP3 利用了 UDP 协议，并基于 UDP 实现类似 TCP 的可靠传输、面向字节流等功能，这套功能称为 QUIC 协议。")]),t._v(" "),_("h3",{attrs:{id:"quic协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#quic协议"}},[t._v("#")]),t._v(" QUIC协议")]),t._v(" "),_("p",[t._v("HTTP2 和 HTTP3 协议栈的对比如下")]),t._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:v(532),alt:"image-20210323173431806"}}),t._v(" "),_("p",[t._v("QUIC 协议集合了几点功能")]),t._v(" "),_("ul",[_("li",[t._v("实现类似 TCP 流量控制、可靠传输的功能。QUIC 在 UDP 基础上增加一层保证数据可靠性")]),t._v(" "),_("li",[t._v("集成 TLS 加密功能。使用高版本 TLS，减少握手中消耗的 RTT")]),t._v(" "),_("li",[t._v("实现 HTTP2 中的多路复用技术。在同一连接上有多个独立的数据流，消除 TCP 队头阻塞问题")]),t._v(" "),_("li",[t._v("实现快速握手功能。因为 QUIC 是基于 UDP 的，所以无需经过三次握手建立连接")])]),t._v(" "),_("p",[t._v("可以把 QUIC 协议看成是集成了 TCP、HTTP2多路复用、TLS 等功能的一套协议。")]),t._v(" "),_("p",[t._v("这些便是 HTTP3 的概览，但是 HTTP3 面临着巨大的挑战。因为 HTTP3 改动了底层协议，设备对 TCP 的优化程度要远大于对 UDP 的优化程度，如此看来 HTTP3 还有很长的一段路要走。")])])}),[],!1,null,null,null);T.default=a.exports}}]);