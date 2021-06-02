<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>

			<style>
				.select2-container{min-width: 180px;}
</style>
			<ul class="nav nav-tabs">
				<li class="active">
					<a href="#">运营统计</a>
				</li>
			</ul>
			<div class="app-content">
				<div class="app-filter">
					<div class="filter-list">
						<form action="" method="get" class="form-horizontal" id="form1">
							<input type="hidden" name="c" value="site" />
							<input type="hidden" name="a" value="entry" />
							<input type="hidden" name="m" value="hyb_yl" />
							<input type="hidden" name="op" value="index" />
							<input type="hidden" name="ac" value="operationstatistics" />
							<input type="hidden" name="do" value="datum" />
							<!-- <input type="hidden" name="days" value="1" /> -->
							<div class="form-group">
								<label class="col-sm-2 control-label">时间</label>
								<div class="col-sm-9 js-daterange" data-form="#form1">
									<div class="btn-group">
										<!-- <a href="<?php  echo $this->createWebUrl('datum',array('op'=>'index','ac'=>'operationstatistics','timetype'=>'1'))?>" class="btn <?php  if($days == '1') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">今天</a>
										<a href="<?php  echo $this->createWebUrl('datum',array('op'=>'index','ac'=>'operationstatistics','timetype'=>'2'))?>" class="btn <?php  if($days == '7') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">最近7天</a>
										<a href="<?php  echo $this->createWebUrl('datum',array('op'=>'index','ac'=>'operationstatistics','timetype'=>'3'))?>" class="btn <?php  if($days == '30') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">最近30天</a> -->
										<a href="javascript:;" class="btn js-btn-custom btn-primary">自定义</a>
									</div>
									<span class="btn-daterange js-btn-daterange">

										<script type="text/javascript">
											require(["daterangepicker"], function(){
													$(function(){
														$(".daterange.daterange-date").each(function(){
															var elm = this;
															$(this).daterangepicker({
																startDate: $(elm).prev().prev().val(),
																endDate: $(elm).prev().val(),
																format: "YYYY-MM-DD"
															}, function(start, end){
																$(elm).find(".date-title").html(start.toDateStr() + " 至 " + end.toDateStr());
																$(elm).prev().prev().val(start.toDateStr());
																$(elm).prev().val(end.toDateStr());
															});
														});
													});
												});
										</script>

										<input name="start" type="hidden" value="<?php  echo $starts;?>" />
										<input name="end" type="hidden" value="<?php  echo $ends;?>" />
										<button class="btn btn-default daterange daterange-date" type="button">
											<span class="date-title"><?php  echo $starts;?> 至 <?php  echo $ends;?></span>
											<i class="fa fa-calendar"></i>
										</button>
									</span>
								</div>
							</div>
							<!-- <div class="form-group form-inline">
								<label class="col-sm-2 control-label">选项</label>
								<div class="col-sm-9">
									<select name="type" class="form-control" id="typese" onchange="changeobj()">
										<option selected value="2">代理</option>
										<option value="1">商户</option>
									</select>
									<div style="display:inline-block;" id="select-agentid">
										<select name="agentid" class="select2 js-select2 form-control width-130">
											<option value="0">所有代理</option>
											<option value="28">天津市代理</option>
											<option value="29">石家庄市代理</option>
											<option value="30">唐山市代理</option>
											<option value="31">秦皇岛市代理</option>
											<option value="32">邯郸市代理</option>
											<option value="33">邢台市代理</option>
											<option value="34">保定市代理</option>
											<option value="35">张家口市代理</option>
											<option value="36">承德市代理</option>
											<option value="37">沧州市代理</option>
											<option value="38">廊坊市代理</option>
											<option value="39">衡水市代理</option>
											<option value="40">太原市代理</option>
											<option value="41">大同市代理</option>
											<option value="42">阳泉市代理</option>
											<option value="43">长治市代理</option>
											<option value="44">晋城市代理</option>
											<option value="45">朔州市代理</option>
											<option value="46">晋中市代理</option>
											<option value="47">运城市代理</option>
											<option value="48">忻州市代理</option>
											<option value="49">临汾市代理</option>
											<option value="50">吕梁市代理</option>
											<option value="51">呼和浩特市代理</option>
											<option value="52">包头市代理</option>
											<option value="53">乌海市代理</option>
											<option value="54">赤峰市代理</option>
											<option value="55">通辽市代理</option>
											<option value="56">鄂尔多斯市代理</option>
											<option value="57">呼伦贝尔市代理</option>
											<option value="58">巴彦淖尔市代理</option>
											<option value="59">乌兰察布市代理</option>
											<option value="60">兴安盟代理</option>
											<option value="61">锡林郭勒盟代理</option>
											<option value="62">阿拉善盟代理</option>
											<option value="63">沈阳市代理</option>
											<option value="64">大连市代理</option>
											<option value="65">鞍山市代理</option>
											<option value="66">抚顺市代理</option>
											<option value="67">本溪市代理</option>
											<option value="68">丹东市代理</option>
											<option value="69">锦州市代理</option>
											<option value="70">营口市代理</option>
											<option value="71">阜新市代理</option>
											<option value="72">辽阳市代理</option>
											<option value="73">盘锦市代理</option>
											<option value="74">铁岭市代理</option>
											<option value="75">朝阳市代理</option>
											<option value="76">葫芦岛市代理</option>
											<option value="77">长春市代理</option>
											<option value="78">吉林市代理</option>
											<option value="79">四平市代理</option>
											<option value="80">辽源市代理</option>
											<option value="81">通化市代理</option>
											<option value="82">白山市代理</option>
											<option value="83">松原市代理</option>
											<option value="84">白城市代理</option>
											<option value="85">延边朝鲜族自治州代理</option>
											<option value="86">哈尔滨市代理</option>
											<option value="87">齐齐哈尔市代理</option>
											<option value="88">鸡西市代理</option>
											<option value="89">鹤岗市代理</option>
											<option value="90">双鸭山市代理</option>
											<option value="91">大庆市代理</option>
											<option value="92">伊春市代理</option>
											<option value="93">佳木斯市代理</option>
											<option value="94">七台河市代理</option>
											<option value="95">牡丹江市代理</option>
											<option value="96">黑河市代理</option>
											<option value="97">绥化市代理</option>
											<option value="98">大兴安岭地区代理</option>
											<option value="99">上海市代理</option>
											<option value="100">南京市代理</option>
											<option value="101">无锡市代理</option>
											<option value="102">徐州市代理</option>
											<option value="103">常州市代理</option>
											<option value="104">苏州市代理</option>
											<option value="105">南通市代理</option>
											<option value="106">连云港市代理</option>
											<option value="107">淮安市代理</option>
											<option value="108">盐城市代理</option>
											<option value="109">扬州市代理</option>
											<option value="110">镇江市代理</option>
											<option value="111">泰州市代理</option>
											<option value="112">宿迁市代理</option>
											<option value="113">杭州市代理</option>
											<option value="114">宁波市代理</option>
											<option value="115">温州市代理</option>
											<option value="116">嘉兴市代理</option>
											<option value="117">湖州市代理</option>
											<option value="118">绍兴市代理</option>
											<option value="119">金华市代理</option>
											<option value="120">衢州市代理</option>
											<option value="121">舟山市代理</option>
											<option value="122">台州市代理</option>
											<option value="123">丽水市代理</option>
											<option value="124">合肥市代理</option>
											<option value="125">芜湖市代理</option>
											<option value="126">蚌埠市代理</option>
											<option value="127">淮南市代理</option>
											<option value="128">马鞍山市代理</option>
											<option value="129">淮北市代理</option>
											<option value="130">铜陵市代理</option>
											<option value="131">安庆市代理</option>
											<option value="132">黄山市代理</option>
											<option value="133">滁州市代理</option>
											<option value="134">阜阳市代理</option>
											<option value="135">宿州市代理</option>
											<option value="136">六安市代理</option>
											<option value="137">亳州市代理</option>
											<option value="138">池州市代理</option>
											<option value="139">宣城市代理</option>
											<option value="140">福州市代理</option>
											<option value="141">厦门市代理</option>
											<option value="142">莆田市代理</option>
											<option value="143">三明市代理</option>
											<option value="144">泉州市代理</option>
											<option value="145">漳州市代理</option>
											<option value="146">南平市代理</option>
											<option value="147">龙岩市代理</option>
											<option value="148">宁德市代理</option>
											<option value="149">南昌市代理</option>
											<option value="150">景德镇市代理</option>
											<option value="151">萍乡市代理</option>
											<option value="152">九江市代理</option>
											<option value="153">新余市代理</option>
											<option value="154">鹰潭市代理</option>
											<option value="155">赣州市代理</option>
											<option value="156">吉安市代理</option>
											<option value="157">宜春市代理</option>
											<option value="158">抚州市代理</option>
											<option value="159">上饶市代理</option>
											<option value="160">济南市代理</option>
											<option value="161">青岛市代理</option>
											<option value="162">淄博市代理</option>
											<option value="163">枣庄市代理</option>
											<option value="164">东营市代理</option>
											<option value="165">烟台市代理</option>
											<option value="166">潍坊市代理</option>
											<option value="167">济宁市代理</option>
											<option value="168">泰安市代理</option>
											<option value="169">威海市代理</option>
											<option value="170">日照市代理</option>
											<option value="171">莱芜市代理</option>
											<option value="172">临沂市代理</option>
											<option value="173">德州市代理</option>
											<option value="174">聊城市代理</option>
											<option value="175">滨州市代理</option>
											<option value="176">菏泽市代理</option>
											<option value="177">郑州市代理</option>
											<option value="178">开封市代理</option>
											<option value="179">洛阳市代理</option>
											<option value="180">平顶山市代理</option>
											<option value="181">安阳市代理</option>
											<option value="182">鹤壁市代理</option>
											<option value="183">新乡市代理</option>
											<option value="184">焦作市代理</option>
											<option value="185">濮阳市代理</option>
											<option value="186">许昌市代理</option>
											<option value="187">漯河市代理</option>
											<option value="188">三门峡市代理</option>
											<option value="189">南阳市代理</option>
											<option value="190">商丘市代理</option>
											<option value="191">信阳市代理</option>
											<option value="192">周口市代理</option>
											<option value="193">驻马店市代理</option>
											<option value="194">武汉市代理</option>
											<option value="195">黄石市代理</option>
											<option value="196">十堰市代理</option>
											<option value="197">宜昌市代理</option>
											<option value="198">襄阳市代理</option>
											<option value="199">鄂州市代理</option>
											<option value="200">荆门市代理</option>
											<option value="201">孝感市代理</option>
											<option value="202">荆州市代理</option>
											<option value="203">黄冈市代理</option>
											<option value="204">咸宁市代理</option>
											<option value="205">随州市代理</option>
											<option value="206">恩施土家族苗族自治州代理</option>
											<option value="207">长沙市代理</option>
											<option value="208">株洲市代理</option>
											<option value="209">湘潭市代理</option>
											<option value="210">衡阳市代理</option>
											<option value="211">邵阳市代理</option>
											<option value="212">岳阳市代理</option>
											<option value="213">常德市代理</option>
											<option value="214">张家界市代理</option>
											<option value="215">益阳市代理</option>
											<option value="216">郴州市代理</option>
											<option value="217">永州市代理</option>
											<option value="218">怀化市代理</option>
											<option value="219">娄底市代理</option>
											<option value="220">湘西土家族苗族自治州代理</option>
											<option value="221">广州市代理</option>
											<option value="222">韶关市代理</option>
											<option value="223">深圳市代理</option>
											<option value="224">珠海市代理</option>
											<option value="225">汕头市代理</option>
											<option value="226">佛山市代理</option>
											<option value="227">江门市代理</option>
											<option value="228">湛江市代理</option>
											<option value="229">茂名市代理</option>
											<option value="230">肇庆市代理</option>
											<option value="231">惠州市代理</option>
											<option value="232">梅州市代理</option>
											<option value="233">汕尾市代理</option>
											<option value="234">河源市代理</option>
											<option value="235">阳江市代理</option>
											<option value="236">清远市代理</option>
											<option value="237">东莞市代理</option>
											<option value="238">中山市代理</option>
											<option value="239">东沙群岛代理</option>
											<option value="240">潮州市代理</option>
											<option value="241">揭阳市代理</option>
											<option value="242">云浮市代理</option>
											<option value="243">南宁市代理</option>
											<option value="244">柳州市代理</option>
											<option value="245">桂林市代理</option>
											<option value="246">梧州市代理</option>
											<option value="247">北海市代理</option>
											<option value="248">防城港市代理</option>
											<option value="249">钦州市代理</option>
											<option value="250">贵港市代理</option>
											<option value="251">玉林市代理</option>
											<option value="252">百色市代理</option>
											<option value="253">贺州市代理</option>
											<option value="254">河池市代理</option>
											<option value="255">来宾市代理</option>
											<option value="256">崇左市代理</option>
											<option value="257">海口市代理</option>
											<option value="258">三亚市代理</option>
											<option value="259">三沙市代理</option>
											<option value="260">重庆市代理</option>
											<option value="261">成都市代理</option>
											<option value="262">自贡市代理</option>
											<option value="263">攀枝花市代理</option>
											<option value="264">泸州市代理</option>
											<option value="265">德阳市代理</option>
											<option value="266">绵阳市代理</option>
											<option value="267">广元市代理</option>
											<option value="268">遂宁市代理</option>
											<option value="269">内江市代理</option>
											<option value="270">乐山市代理</option>
											<option value="271">南充市代理</option>
											<option value="272">眉山市代理</option>
											<option value="273">宜宾市代理</option>
											<option value="274">广安市代理</option>
											<option value="275">达州市代理</option>
											<option value="276">雅安市代理</option>
											<option value="277">巴中市代理</option>
											<option value="278">资阳市代理</option>
											<option value="279">阿坝藏族羌族自治州代理</option>
											<option value="280">甘孜藏族自治州代理</option>
											<option value="281">凉山彝族自治州代理</option>
											<option value="282">贵阳市代理</option>
											<option value="283">六盘水市代理</option>
											<option value="284">遵义市代理</option>
											<option value="285">安顺市代理</option>
											<option value="286">铜仁市代理</option>
											<option value="287">黔西南布依族苗族自治州代理</option>
											<option value="288">毕节市代理</option>
											<option value="289">黔东南苗族侗族自治州代理</option>
											<option value="290">黔南布依族苗族自治州代理</option>
											<option value="291">昆明市代理</option>
											<option value="292">曲靖市代理</option>
											<option value="293">玉溪市代理</option>
											<option value="294">保山市代理</option>
											<option value="295">昭通市代理</option>
											<option value="296">丽江市代理</option>
											<option value="297">普洱市代理</option>
											<option value="298">临沧市代理</option>
											<option value="299">楚雄彝族自治州代理</option>
											<option value="300">红河哈尼族彝族自治州代理</option>
											<option value="301">文山壮族苗族自治州代理</option>
											<option value="302">西双版纳傣族自治州代理</option>
											<option value="303">大理白族自治州代理</option>
											<option value="304">德宏傣族景颇族自治州代理</option>
											<option value="305">怒江傈僳族自治州代理</option>
											<option value="306">迪庆藏族自治州代理</option>
											<option value="307">拉萨市代理</option>
											<option value="308">昌都市代理</option>
											<option value="309">山南市代理</option>
											<option value="310">日喀则市代理</option>
											<option value="311">那曲市代理</option>
											<option value="312">阿里地区代理</option>
											<option value="313">林芝市代理</option>
											<option value="314">西安市代理</option>
											<option value="315">铜川市代理</option>
											<option value="316">宝鸡市代理</option>
											<option value="317">咸阳市代理</option>
											<option value="318">渭南市代理</option>
											<option value="319">延安市代理</option>
											<option value="320">汉中市代理</option>
											<option value="321">榆林市代理</option>
											<option value="322">安康市代理</option>
											<option value="323">商洛市代理</option>
											<option value="324">兰州市代理</option>
											<option value="325">嘉峪关市代理</option>
											<option value="326">金昌市代理</option>
											<option value="327">白银市代理</option>
											<option value="328">天水市代理</option>
											<option value="329">武威市代理</option>
											<option value="330">张掖市代理</option>
											<option value="331">平凉市代理</option>
											<option value="332">酒泉市代理</option>
											<option value="333">庆阳市代理</option>
											<option value="334">定西市代理</option>
											<option value="335">陇南市代理</option>
											<option value="336">临夏回族自治州代理</option>
											<option value="337">甘南藏族自治州代理</option>
											<option value="338">西宁市代理</option>
											<option value="339">海东市代理</option>
											<option value="340">海北藏族自治州代理</option>
											<option value="341">黄南藏族自治州代理</option>
											<option value="342">海南藏族自治州代理</option>
											<option value="343">果洛藏族自治州代理</option>
											<option value="344">玉树藏族自治州代理</option>
											<option value="345">海西蒙古族藏族自治州代理</option>
											<option value="346">银川市代理</option>
											<option value="347">石嘴山市代理</option>
											<option value="348">吴忠市代理</option>
											<option value="349">固原市代理</option>
											<option value="350">中卫市代理</option>
											<option value="351">乌鲁木齐市代理</option>
											<option value="352">克拉玛依市代理</option>
											<option value="353">吐鲁番市代理</option>
											<option value="354">哈密市代理</option>
											<option value="355">昌吉回族自治州代理</option>
											<option value="356">博尔塔拉蒙古自治州代理</option>
											<option value="357">巴音郭楞蒙古自治州代理</option>
											<option value="358">阿克苏地区代理</option>
											<option value="359">克孜勒苏柯尔克孜自治州代理</option>
											<option value="360">喀什地区代理</option>
											<option value="361">和田地区代理</option>
											<option value="362">伊犁哈萨克自治州代理</option>
											<option value="363">塔城地区代理</option>
											<option value="364">阿勒泰地区代理</option>
											<option value="365">可克达拉市代理</option>
											<option value="366">台北市代理</option>
											<option value="367">高雄市代理</option>
											<option value="368">台南市代理</option>
											<option value="369">台中市代理</option>
											<option value="370">金门县代理</option>
											<option value="371">南投县代理</option>
											<option value="372">基隆市代理</option>
											<option value="373">新竹市代理</option>
											<option value="374">嘉义市代理</option>
											<option value="375">新北市代理</option>
											<option value="376">宜兰县代理</option>
											<option value="377">新竹县代理</option>
											<option value="378">桃园市代理</option>
											<option value="379">苗栗县代理</option>
											<option value="380">彰化县代理</option>
											<option value="381">嘉义县代理</option>
											<option value="382">云林县代理</option>
											<option value="383">屏东县代理</option>
											<option value="384">台东县代理</option>
											<option value="385">花莲县代理</option>
											<option value="386">澎湖县代理</option>
											<option value="387">连江县代理</option>
											<option value="388">香港岛代理</option>
											<option value="389">九龙代理</option>
											<option value="390">新界代理</option>
											<option value="391">澳门半岛代理</option>
											<option value="392">离岛代理</option>
											<option value="393">海外代理</option>
										</select>
									</div>
									<div id="select-sid" style="display: inline-block;">
										<select name="sid" class="form-control select2 js-select2 width-130">
											<option value="0" selected>全部机构</option>
											<option value="94">专家</option>
										</select>
									</div>
								</div>
							</div> -->
						</form>
					</div>
				</div>

				<div class="panel panel-stat">
					<div class="panel-heading">
						<h3>总览</h3>
					</div>
					<div class="panel-body">
						<div class="col-md-3">
							<div class="title">
								营业总额(元)
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-fee">￥<?php  echo $money;?></span>
								</a>
							</div>
						</div>
						<div class="col-md-3">
							<div class="title">
								支付客户数
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-final-fee"><?php  echo $count;?></span>
								</a>
							</div>
						</div>
						<div class="col-md-3">
							<div class="title">
								有效订单量
								<i class="fa fa-info-circle" data-toggle="popover" data-placement="top" data-content="有效订单量（参考公式：有效订单=支付订单 - 退款订单）"></i>
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-success-order"><?php  echo $count;?></span>
								</a>
								<!-- <span class="info" id="html-avg-pre-order">￥--</span> -->
							</div>
						</div>
						<div class="col-md-3">
							<div class="title">
								退款订单量
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-cancel-order"><?php  echo $refund;?></span>
								</a>
								<!-- <span class="info" id="html-total-cancel-fee">￥--</span> -->
							</div>
						</div>
					</div>
					<div class="panel-body">
						<div class="col-md-2">
							<div class="title">
								图文问诊支付金额
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-half-fee">￥<?php  echo $tuwen;?></span>
								</a>
							</div>
						</div>
						<div class="col-md-2">
							<div class="title">
								远程开方支付金额
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-pocket-fee">￥<?php  echo $chufang;?></span>
								</a>
							</div>
						</div>
						<div class="col-md-2">
							<div class="title">
								视频问诊支付金额
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-charge-fee">￥<?php  echo $shipin;?></span>
								</a>
							</div>
						</div>
						<div class="col-md-2">
							<div class="title">
								电话问诊支付金额
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-distributor-fee">￥<?php  echo $tel;?></span>
								</a>
							</div>
						</div>
						<div class="col-md-2">
							<div class="title">
								远程挂号支付金额
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-recharge-fee">￥<?php  echo $guahao;?></span>
								</a>
							</div>
						</div>
					</div>
					<div class="panel-body">
						<div class="col-md-2">
							<div class="title">
								手术安排支付金额
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-rush-fee">￥<?php  echo $shoushu;?></span>
								</a>
							</div>
						</div>
						<div class="col-md-2">
							<div class="title">
								报告解读支付金额
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-fight-fee">￥<?php  echo $baogao;?></span>
								</a>
							</div>
						</div>
						<div class="col-md-2">
							<div class="title">
								药品支付金额
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-coupon-fee">￥<?php  echo $goods;?></span>
								</a>
							</div>
						</div>
						<div class="col-md-2">
							<div class="title">
								健康体检支付金额
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-groupon-fee">￥<?php  echo $tijian;?></span>
								</a>
							</div>
						</div>
						<div class="col-md-2">
							<div class="title">
								分销推广支出金额
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-activity-fee">￥<?php  echo $fenxiao;?></span>
								</a>
							</div>
						</div>
						<div class="col-md-2">
							<div class="title">
								平台抽成支出金额
							</div>
							<div class="num-wrapper">
								<a class="num" href="javascript:;">
									<span id="html-total-payonline-fee">￥<?php  echo $choucheng;?></span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="panel panel-trend hide">
					<div class="panel-heading">
						<h3>趋势图</h3>
					</div>
					<div class="panel-body">
						<div id="chart-order-holder" style="width: 100%;height:400px;"></div>
					</div>
				</div>

				<div class="app-table-list">
					<div class="table-responsive">
						<table class="table table-bordered table-hover">
							<thead class="navbar-inner">
								<tr>
									<th>日期</th>
									<!-- <th>订单数</th> -->
									<th>总营业额</th>
									<th>图文问诊</th>
									<th>远程开方</th>
									<th>视频问诊</th>
									<th>电话问诊</th>
									<th>远程挂号</th>
									
									<th>手术安排</th>
									<th>报告解读</th>
									<th>药品收入</th>
									<th>健康体检</th>
									<!-- <th>专家入驻</th> -->
									<!-- <th>机构入驻</th> -->
									<th>分销推广</th>
									<th>平台抽成</th>
									<!-- <th>总退款</th> -->
								</tr>
							</thead>
							<tbody>
							<?php  if(is_array($date)) { foreach($date as $item) { ?>
								<tr>
									<td>
										<strong><?php  echo $item['time'];?></strong>
									</td>
									<!-- <td>
										<strong><?php  echo $item['time'];?></strong>
									</td> -->
									<td>
										<strong><?php  echo $item['money'];?></strong>
									</td>
									<td>
										<span class="text-info">￥<?php  echo $item['tuwen'];?></span>
									</td>
									<td>
										<span class="text-info">￥<?php  echo $item['chufang'];?></span>
									</td>
									<td>
										<span class="text-info">￥<?php  echo $item['shipin'];?></span>
									</td>
									<td>
										<span class="text-info">￥<?php  echo $item['tel'];?></span>
									</td>
									<td>
										<span class="text-info">￥<?php  echo $item['guahao'];?></span>
									</td>
									
									<td>
										<span class="text-success">￥<?php  echo $item['shoushu'];?></span>
									</td>
									<td>
										<span class="text-success">￥<?php  echo $item['baogao'];?></span>
									</td>
									<td>
										<span class="text-success">￥<?php  echo $item['goods'];?></span>
									</td>
									<td>
										<span class="text-success">￥<?php  echo $item['tijian'];?></span>
									</td>
									<td>
										<span class="text-success">￥<?php  echo $item['fenxiao'];?></span>
									</td>
									<td>
										<span class="text-success">￥<?php  echo $item['choucheng'];?></span>
									</td>
									<!-- <td>
										<span class="text-success">￥<?php  echo $item['time'];?></span>
									</td>
									<td>
										<strong class="text-danger">￥<?php  echo $item['time'];?></strong>
									</td> -->
								</tr>
								<?php  } } ?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="foot" id="footer">
	<ul class="links ft">
		<li class="links_item">
			<div class="copyright">Powered by <a href="http://www.we7.cc">
					<b>系统</b>
				</a> v2.0.4 © 2014-2015 <a href="http://www.we7.cc">www.we7.cc</a>
			</div>
		</li>
	</ul>
</div>



<script>
	require(['bootstrap'], function ($) {
			    $('[data-toggle="tooltip"]').tooltip({
		            container: $(document.body)
		        });
		        $('[data-toggle="popover"]').popover({
		            container: $(document.body)
		        });
		        $('[data-toggle="dropdown"]').dropdown({
		            container: $(document.body)
		        });
		    });
			myrequire(['js/init']);
					$('.app-login-info-name, .app-login-info-sel').mouseover(function(){
				$('.app-login-info-sel').show();
			});
			$('.app-login-info-name, .app-login-info-sel').mouseout(function(){
				$('.app-login-info-sel').hide();
			});
			$('.app-login-info-sel .login-out').hover(function(){
				$('.app-login-info-sel-arrow').css('border-color', '#1ab394 transparent transparent transparent');
			},function(){
				$('.app-login-info-sel-arrow').css('border-color', '#f2f2f2 transparent transparent transparent');
			});
</script>
</body>
</html>