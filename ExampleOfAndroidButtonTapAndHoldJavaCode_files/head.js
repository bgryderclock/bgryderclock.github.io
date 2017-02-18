window.__ATA = {
        scriptSrc: '//s.pubmine.com/showad.js',
        slotPrefix: 'automattic-id-',
        passbackReceiver: 'automattic-passback-receiver',
        passbackSrc: '//s.pubmine.com/passback.html',
        customParams: _ipw_custom,
        providerData: [],
        initAd: function(o){
                var o=o||{},g=window,d=g.document,wr=d.write,id=g.__ATA.id();wr.call(d,
                '<div id="'+id+'" data-section="'+(o.sectionId||0)+'"'+(o.type?('data-type="'+o.type+'"'):'')+' '+(o.forcedUrl?('data-forcedurl="'+o.forcedUrl+'"'):'')+' style="width:'+(o.width||0)+'px; height:'+(o.height||0)+'px;">');g.__ATA.displayAd(id, o.customParams);wr.call(d,'</div>');
        },
        displayAd: function(id){window.__ATA.ids=window.__ATA.ids||{};window.__ATA.ids[id]=1;},
        registerAdapterResult: function(id, result){if ("undefined" != typeof result && "" != result && null !== result && result.length > 0) {window.__ATA.providerData.push({'provider': id, 'response': result})}},
        id: function(){return window.__ATA.slotPrefix+(parseInt(Math.random()*10000,10)+1+(new Date()).getMilliseconds());}
};
//headerbidding
(function(showadName){
    if (!window[showadName]) return;

    var providers = [
        {
            key: 'YB',
            src: '//cdn.yldbt.com/js/yieldbot.intent.js',
            getResult: 'yieldbot.getPageCriteria()',
            preScript: ''
        }
    ];

    //TODO - condition should be removed after amznPay removal
    if (!window[showadName].customParams.amznPay) {
        providers.push(
                {
                    key: 'A9',
                    src: '//c.amazon-adsystem.com/aax2/amzn_ads.js',
                    getResult: 'amznads.getKeys()',
                    preScript: '<'+'script type="text/javascript">try { amznads.getAds("3033"); } catch (err) {}<'+'/script>'
                }
        )
    }

    var provider, res = [];
    var template =
        '<script type="text/javascript" src="${src}"></script>' +
        '${preScript}' +
        '<script type="text/javascript">' +
        '    try {' +
        '        ${showadName}.registerAdapterResult("${key}", ${getResult});' +
        '    } catch (err) {}' +
        '</script>';

    for (var i=0,l=providers.length; i<l; i++) {
        provider = providers[i];
        provider.showadName = showadName;
        res.push(template.replace(/\${([a-zA-Z]+)}/g, function(ig,k){
            return provider[k] || '';
        }));
    }

    document.write(res.join('\n'));

})('__ATA');
// including ad delivery script
(function(g,d,ata,sync){
        var pr="https:"===d.location.protocol?"https:":"http:",src=pr+ata.scriptSrc,st="text/javascript";
        (sync===true)?d.write('<scr'+'ipt type="'+st+'" src="'+src+'"><\/scr'+'ipt>'):inj(src,st);
        function inj(url,st) {
                var s=d.createElement("script"),n=d.getElementsByTagName("script")[0],p=n.parentNode,ib=p.insertBefore;
                s.type=st;s.src=url;s.async=true;(navigator.userAgent.indexOf("Opera")!==-1)?setTimeout(function(){ib.call(p,s,n);},0):ib.call(p,s,n);
        }})(window, window.document, window.__ATA, window.__ATA.isSync);