var gdjs;(function(m){let y;(function(w){let h;(function(r){const b={linear:shifty.Tweenable.formulas.linear,easeInQuad:shifty.Tweenable.formulas.easeInQuad,easeOutQuad:shifty.Tweenable.formulas.easeOutQuad,easeInOutQuad:shifty.Tweenable.formulas.easeInOutQuad,easeInCubic:shifty.Tweenable.formulas.easeInCubic,easeOutCubic:shifty.Tweenable.formulas.easeOutCubic,easeInOutCubic:shifty.Tweenable.formulas.easeInOutCubic,easeInQuart:shifty.Tweenable.formulas.easeInQuart,easeOutQuart:shifty.Tweenable.formulas.easeOutQuart,easeInOutQuart:shifty.Tweenable.formulas.easeInOutQuart,easeInQuint:shifty.Tweenable.formulas.easeInQuint,easeOutQuint:shifty.Tweenable.formulas.easeOutQuint,easeInOutQuint:shifty.Tweenable.formulas.easeInOutQuint,easeInSine:shifty.Tweenable.formulas.easeInSine,easeOutSine:shifty.Tweenable.formulas.easeOutSine,easeInOutSine:shifty.Tweenable.formulas.easeInOutSine,easeInExpo:shifty.Tweenable.formulas.easeInExpo,easeOutExpo:shifty.Tweenable.formulas.easeOutExpo,easeInOutExpo:shifty.Tweenable.formulas.easeInOutExpo,easeInCirc:shifty.Tweenable.formulas.easeInCirc,easeOutCirc:shifty.Tweenable.formulas.easeOutCirc,easeInOutCirc:shifty.Tweenable.formulas.easeInOutCirc,easeOutBounce:shifty.Tweenable.formulas.easeOutBounce,easeInBack:shifty.Tweenable.formulas.easeInBack,easeOutBack:shifty.Tweenable.formulas.easeOutBack,easeInOutBack:shifty.Tweenable.formulas.easeInOutBack,elastic:shifty.Tweenable.formulas.elastic,swingFromTo:shifty.Tweenable.formulas.swingFromTo,swingFrom:shifty.Tweenable.formulas.swingFrom,swingTo:shifty.Tweenable.formulas.swingTo,bounce:shifty.Tweenable.formulas.bounce,bouncePast:shifty.Tweenable.formulas.bouncePast,easeFromTo:shifty.Tweenable.formulas.easeFromTo,easeFrom:shifty.Tweenable.formulas.easeFrom,easeTo:shifty.Tweenable.formulas.easeTo};r.ease=(e,n,s,t)=>{const a=b.hasOwnProperty(e)?b[e]:shifty.Tweenable.formulas.linear;return n+(s-n)*a(t)};const i=e=>e._tweens||(e._tweens=new Map),f=e=>e.shiftyJsScene||(e.shiftyJsScene=new shifty.Scene);r.sceneTweenExists=(e,n)=>i(e).has(n),r.sceneTweenIsPlaying=(e,n)=>{const t=i(e).get(n);return!!t&&t.isPlaying()},r.sceneTweenHasFinished=(e,n)=>{const t=i(e).get(n);return!!t&&t.hasEnded()},r.resumeSceneTween=(e,n)=>{const t=i(e).get(n);!t||(t.resume(),f(e).add(t))},r.pauseSceneTween=(e,n)=>{const t=i(e).get(n);!t||(t.pause(),f(e).remove(t))},r.stopSceneTween=(e,n,s)=>{const a=i(e).get(n);!a||(a.stop(s),f(e).remove(a))},r.removeSceneTween=(e,n)=>{const s=i(e),t=s.get(n);!t||(s.delete(n),f(e).remove(t),t.stop().dispose())},r.tweenVariableNumber=(e,n,s,t,a,c,u)=>{const o=shifty.tween({from:{value:t},to:{value:a},easing:u,duration:c,render:({value:l})=>s.setNumber(l)});i(e).set(n,o),f(e).add(o)},r.tweenCamera=(e,n,s,t,a,c,u)=>{const o=e.getLayer(a),l=shifty.tween({from:{x:o.getCameraX(),y:o.getCameraY()},to:{x:s,y:t},easing:u,duration:c,render:({x:T,y:p})=>{o.setCameraX(T),o.setCameraY(p)}});i(e).set(n,l),f(e).add(l)},r.tweenCameraZoom=(e,n,s,t,a,c)=>{const u=e.getLayer(t),o=shifty.tween({from:{zoom:u.getCameraZoom()},to:{zoom:s},easing:c,duration:a,render:({zoom:l})=>{u.setCameraZoom(l)}});i(e).set(n,o),f(e).add(o)},r.tweenCameraRotation=(e,n,s,t,a,c)=>{const u=e.getLayer(t),o=shifty.tween({from:{rotation:u.getCameraRotation()},to:{rotation:s},easing:c,duration:a,render:({rotation:l})=>{u.setCameraRotation(l)}});i(e).set(n,o),f(e).add(o)}})(h=w.tween||(w.tween={}))})(y=m.evtTools||(m.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=tweentools.js.map
