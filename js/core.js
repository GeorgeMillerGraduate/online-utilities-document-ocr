/* Original JengaCode OCR preparation and result utilities. */
(function(root){'use strict';
function treatment(rgba,mode='gray',contrast=1,threshold=160){const out=new Uint8ClampedArray(rgba.length);for(let i=0;i<rgba.length;i+=4){const a=rgba[i+3]/255,r=rgba[i]*a+255*(1-a),g=rgba[i+1]*a+255*(1-a),b=rgba[i+2]*a+255*(1-a);if(mode==='original'){out[i]=(r-128)*contrast+128;out[i+1]=(g-128)*contrast+128;out[i+2]=(b-128)*contrast+128;}else{let gray=(.299*r+.587*g+.114*b-128)*contrast+128;if(mode==='binary')gray=gray>=threshold?255:0;out[i]=out[i+1]=out[i+2]=gray;}out[i+3]=255;}return out;}
function words(blocks){const out=[];for(const block of blocks||[])for(const paragraph of block.paragraphs||[])for(const line of paragraph.lines||[])for(const word of line.words||[])if(word.text?.trim())out.push({text:word.text,confidence:word.confidence,bbox:word.bbox});return out;}
function count(text){return text.trim()?text.trim().split(/\s+/u).length:0;}
function clampRect(a,b,w,h){const x=Math.max(0,Math.min(w,Math.min(a.x,b.x))),y=Math.max(0,Math.min(h,Math.min(a.y,b.y)));return {x,y,w:Math.max(0,Math.min(w,Math.max(a.x,b.x))-x),h:Math.max(0,Math.min(h,Math.max(a.y,b.y))-y)};}
const api={treatment,words,count,clampRect};root.OCRCore=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
