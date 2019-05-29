(function() {
  var albums = [
    // Each album contains
    // parent (html element ref), images
    //
    // Each image contains the following properties
    // required: caption, url
    // optional: data-size, portrait (boolean)
    {
      parent: document.querySelector("#gallery-2019"),
      images: [
        { url: "/photos/2019/IMG_20190216_133843.jpg", portrait: true, 'data-size': '1104x1472', caption: "", },
        { url: "/photos/2019/IMG_20190323_112421.jpg", portrait: true, 'data-size': '1104x1472', caption: "", },
        { url: "/photos/2019/IMG_20190323_113056.jpg", portrait: true, 'data-size': '1104x1472', caption: "Around Lyons, Oregon", },
        { url: "/photos/2019/IMG_20190323_115103.jpg", portrait: true, 'data-size': '1104x1472', caption: "Around Lyons, Oregon", },
        { url: "/photos/2019/IMG_20190413_173322.jpg", caption: "", },
        { url: "/photos/2019/IMG_20190427_203504.jpg", caption: "", },
        { url: "/photos/2019/signal-2019-04-28-110908.jpg", portrait: true, 'data-size': '810x1080', caption: "First daily limit (5) of fish caught", },
        { url: "/photos/2019/signal-2019-04-28-110949.jpg", portrait: true, 'data-size': '810x1080', caption: "", },
      ],
    },
    {
      parent: document.querySelector("#gallery-2018"),
      images: [
        { url: "/photos/2018/20180114_134104.jpg", caption: "Joshua Tree National Park", },
        { url: "/photos/2018/20180120_110401.jpg", },
        { url: "/photos/2018/20180120_110101.jpg", caption: "Lake Isabella, CA", },
        { url: "/photos/2018/20180120_114505.jpg", caption: "Lake Isabella, CA", },
        { url: "/photos/2018/20180213_152730.jpg", 'data-size': '2576x1932', caption: "Meeting Leo Laport! (Tech Journalist, Podcaster)" },
        { url: "/photos/2018/20180226_172558.jpg", caption: "California" },
        { url: "/photos/2018/20180308_164117.jpg", 'data-size': '2576x1932', caption: "St. George, UT" },
        { url: "/photos/2018/20180308_164129.jpg", portrait: true, 'data-size': '1932x2576', caption: "St. George, UT" },

        { url: "/photos/2018/20180208_163950.jpg", portrait: true, caption: "Golen Gate Bridge", },
        { url: "/photos/2018/20180208_154140.jpg", caption: "Headed into SF", },
        { url: "/photos/2018/20180209_160126.jpg", },
        { url: "/photos/2018/20180411_184527.jpg", portrait: true, caption: "Hike along Niagara", },
        { url: "/photos/2018/20180411_182132.jpg", caption: "Cove on Niagara hike", },
        { url: "/photos/2018/20180411_185907.jpg", caption: "Niagara river", },
        { url: "/photos/2018/20180429_092853.jpg", caption: "Mt. Cadillac - Acadia National Park", },
        { url: "/photos/2018/20180429_093616.jpg", caption: "Mt. Cadillac - Acadia National Park", },
        { url: "/photos/2018/20180429_095419.jpg", caption: "Mt. Cadillac - Acadia National Park", },
        { url: "/photos/2018/st-george-utah/20180308_164117.jpg", caption: "St. George, Utah - BLM Hike", },
        // Shawnee
        { url: "/photos/2018/shawnee/35483775_10155362388482307_4741961537680310272_o.jpg", portrait: true, caption: "Shawnee National Forest, IL", },
        { url: "/photos/2018/shawnee/35628562_10155362387967307_2362429499691237376_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35671657_10155362387437307_7309951779930636288_o.jpg", caption: "Garden of the Gods, Shawnee Forest, IL", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35682306_10155362387812307_3986504999659110400_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35695482_10155362389387307_3480520666363461632_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35705831_10155362388997307_7189004659061686272_o.jpg", caption: "Little Grand Canyon, Shawnee, IL", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35724605_10155362389542307_8328205963655905280_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35741041_10155362387612307_1851294422570893312_o.jpg", caption: "Garden of the Gods", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35747330_10155362389012307_5413767952614817792_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35748952_10155362388122307_8603288165014306816_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35758813_10155362388857307_5462096900314365952_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35761492_10155362389487307_3341573260247564288_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35761523_10155362389642307_1613665603048964096_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35765876_10155362387427307_4543822442774134784_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35810606_10155362388457307_5804611381005123584_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35815014_10155362387272307_6870696102950076416_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35819493_10155362390207307_1375158329571016704_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35836788_10155362390392307_3694324357401673728_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35853450_10155362390432307_8130199849527148544_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35884290_10155362389962307_606314378488184832_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35925285_10155362399382307_1054555530778902528_o.jpg", caption: "", 'data-size': '2016x1512', },
        { url: "/photos/2018/shawnee/35935183_10155362389997307_3519689642821550080_o.jpg", caption: "", 'data-size': '2016x1512', },
        // Colorado
        { url: "/photos/2018/colorado-jeep/10ee38aa-dd08-4e8e-8402-0eb57b77c52b.jpg", portrait: true, caption: "Lakeside camp outside Silverthorn, CO", },
        { url: "/photos/2018/colorado-jeep/20180804_174558.jpg", caption: "Camping in Colorado", },
        { url: "/photos/2018/colorado-jeep/20180809_201048.jpg", caption: "", },
        { url: "/photos/2018/colorado-jeep/20180805_071527.jpg", caption: "Caves! ", },
        { url: "/photos/2018/colorado-jeep/20180805_071753.jpg", caption: "", },
        { url: "/photos/2018/colorado-jeep/20180805_080757.jpg", caption: "", },
        { url: "/photos/2018/colorado-jeep/20180805_094803.jpg", caption: "Rescue team during training", },
        { url: "/photos/2018/colorado-jeep/20180805_094807.jpg", caption: "", 'data-size': '1932x2576'},
        { url: "/photos/2018/colorado-jeep/20180805_104854.jpg", caption: "", },
        { url: "/photos/2018/colorado-jeep/20180805_105106.jpg", caption: "", },
        { url: "/photos/2018/colorado-jeep/20180805_111149.jpg", caption: "Colorado", },
        { url: "/photos/2018/colorado-jeep/20180805_111152.jpg", caption: "", },
        // Wyoming
        { url: "/photos/2018/colorado-jeep/20180808_152327.jpg", caption: "Wyoming", },
        { url: "/photos/2018/colorado-jeep/20180808_152338.jpg", caption: "", },
        { url: "/photos/2018/colorado-jeep/20180808_191736.jpg", caption: "Wyoming", },
        { url: "/photos/2018/colorado-jeep/20180808_191749.jpg", caption: "", },
        { url: "/photos/2018/colorado-jeep/20180810_125022.jpg", caption: "", },
        // Idaho
        { url: "/photos/2018/idaho/20180810_145322.jpg", portrait: true, caption: "Dinosaur Natl Monument, Idaho" },
        { url: "/photos/2018/idaho/20180810_150050.jpg", portrait: true, caption: "Dinosaur Natl Monument, Idaho" },
        // Crater Lake
        { url: "/photos/2018/crater-lake/056f4afb-57e0-44de-aec2-2a2784c7bbb2.jpg", caption: "On the way to Crater Lake (Oregon Forest near Bend)", },
        { url: "/photos/2018/crater-lake/12aba5a3-0cf0-42d2-b2ae-92d9729e67df.jpg", caption: "Up on Mt. Scott viewing the Lake", 'data-size': '1200x1600', },
        { url: "/photos/2018/crater-lake/154ff73d-f9cb-41ec-9e10-141c2afbd4ea.jpg", portrait: true, caption: "Giant pinecones!", },
        { url: "/photos/2018/crater-lake/31651a4a-b622-49ef-ba5b-594869013191.jpg", caption: "", 'data-size': '1200x1600', },
        { url: "/photos/2018/crater-lake/723a114d-43c3-441c-9a1d-f3d594aa62bb.jpg", caption: "", },
        { url: "/photos/2018/crater-lake/861709cb-e5e5-44c2-8861-5048b8d266d5.jpg", caption: "", 'data-size': '1200x1600', },
        { url: "/photos/2018/crater-lake/8733276e-2146-452b-bbf9-6a4081d33c26.jpg", caption: "", 'data-size': '1200x1600', },
        { url: "/photos/2018/crater-lake/cef9ecbb-0abc-477c-8be3-a0f3f7151754.jpg", caption: "", 'data-size': '1200x1600', },
        { url: "/photos/2018/crater-lake/e1074205-60fd-4f48-8100-7904254c9a92.jpg", caption: "Beautiful calm water - Crater Lake, OR", },
      ],
    },
    {
      parent: document.querySelector("#gallery-2017"),
      images: [
        { url: "/photos/2017/photo5706535545559164848.jpg", portrait: true, caption: "Leavenworth, Washington", },
        { url: "/photos/2017/photo5706535545559164851.jpg", portrait: true, caption: "Leavenworth, Washington", },
        { url: "/photos/2017/photo5706535545559164854.jpg", portrait: true, },
        { url: "/photos/2017/photo5706535545559164856.jpg", portrait: true, caption: "Rougue Brewing -- Oregon", },
        { url: "/photos/2017/photo5706535545559164872.jpg", portrait: true, },
        { url: "/photos/2017/photo5706535545559164882.jpg", portrait: true, },
        { url: "/photos/2017/photo5706535545559164917.jpg", portrait: true, },
        { url: "/photos/2017/photo5706535545559164940.jpg", portrait: true, },
        { url: "/photos/2017/photo5706535545559164913.jpg", 'data-size': '1280x414', },
        { url: "/photos/2017/photo5706535545559164914.jpg", 'data-size': '1280x290', },
        { url: "/photos/2017/photo5706535545559164873.jpg", },
        { url: "/photos/2017/photo5706535545559164879.jpg", },
        { url: "/photos/2017/photo5706535545559164888.jpg", },
        { url: "/photos/2017/photo5706535545559164894.jpg", },
        { url: "/photos/2017/photo5706535545559164900.jpg", },
        { url: "/photos/2017/photo5706535545559164915.jpg", },
        { url: "/photos/2017/photo5706535545559164933.jpg", },
        { url: "/photos/2017/photo5706535545559164842.jpg", 'data-size': '1280x959', caption: "Eclipse outside Madras, OR", },
        { url: "/photos/2017/photo5706535545559164866.jpg", },
        { url: "/photos/2017/photo5706535545559164845.jpg", },
      ],
    },
    {
      parent: document.querySelector("#gallery-2016"),
      images: [
        { url: "/photos/2016/IMG_20161006_175555_01.jpg", 'data-size': '800x290', },
        { url: "/photos/2016/IMG_20161006_175558_01.jpg", 'data-size': '480x360', },
        { url: "/photos/2016/IMG_20161006_175601_01.jpg", 'data-size': '480x360', },
        { url: "/photos/2016/IMG_20161006_175602_01.jpg", 'data-size': '480x360', },
      ]
    }
  ];

  var getThumbnail = function(path) {
    var parts = path.split('.')
    parts.pop() // drop last element (file extension)
    return parts.join('.') + "_thumb.jpg"
  }

  // Add images to html
  for (i = 0; i < albums.length; i++) {
    var album = albums[i];
    for (k = 0; k < album.images.length; k++) {
      var img = album.images[k]

      // Create each figure element, add children and attach onto our gallery.
      var elm = document.createElement("figure")
      album.parent.appendChild(elm)
      elm.setAttribute("itemprop", "associatedMedia")
      elm.setAttribute("itemscope", "")
      elm.setAttribute("itemtype", "http://schema.org/ImageObject")

      var a = document.createElement("a")
      elm.appendChild(a)
      a.href = img.url
      a.setAttribute("itemprop", "contentUrl")

      if (img.hasOwnProperty('data-size')) {
        a.setAttribute("data-size", img['data-size'])
      } else {
        a.setAttribute("data-size", "1280x720")
      }
      if (img.portrait) {
        a.setAttribute("data-size", "720x1280")
      }

      var inner = document.createElement("img")
      a.appendChild(inner)
      inner.src = getThumbnail(img.url)
      inner.setAttribute("itemprop", "thumbnail")
      if (img.hasOwnProperty('caption')) {
        inner.alt = img['caption']

        // add gallery caption
        var caption = document.createElement("figcaption")
        elm.appendChild(caption)
        caption.setAttribute("itemprop", "caption description")
        caption.innerHTML = img['caption']
      }
    }
  }
})();

// Example html block for an image
// <figure  itemscope >
//   <a href="https://farm3.staticflickr.com/2567/5697107145_a4c2eaa0cd_o.jpg" itemprop="contentUrl" data-size="1024x1024">
//     <img src="https://farm3.staticflickr.com/2567/5697107145_3c27ff3cd1_m.jpg" itemprop="thumbnail" alt="Image description" />
//   </a>
//   <figcaption itemprop="caption description">Image caption  1</figcaption>
// </figure>

var initPhotoSwipeFromDOM = function(gallerySelector) {

  // parse slide data (url, title, size ...) from DOM elements
  // (children of gallerySelector)
  var parseThumbnailElements = function(el) {
    var thumbElements = el.childNodes,
        numNodes = thumbElements.length,
        items = [],
        figureEl,
        linkEl,
        size,
        item;

    for(var i = 0; i < numNodes; i++) {

      figureEl = thumbElements[i]; // <figure> element

      // include only element nodes
      if(figureEl.nodeType !== 1) {
        continue;
      }

      linkEl = figureEl.children[0]; // <a> element

      size = linkEl.getAttribute('data-size').split('x');

      // create slide object
      item = {
        src: linkEl.getAttribute('href'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10)
      };

      if(figureEl.children.length > 1) {
        // <figcaption> content
        item.title = figureEl.children[1].innerHTML;
      }

      if(linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute('src');
      }

      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }

    return items;
  };

  // find nearest parent element
  var closest = function closest(el, fn) {
    return el && ( fn(el) ? el : closest(el.parentNode, fn) );
  };

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function(e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    var eTarget = e.target || e.srcElement;

    // find root element of slide
    var clickedListItem = closest(eTarget, function(el) {
      return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
    });

    if(!clickedListItem) {
      return;
    }

    // find index of clicked item by looping through all child nodes
    // alternatively, you may define index via data- attribute
    var clickedGallery = clickedListItem.parentNode,
        childNodes = clickedListItem.parentNode.childNodes,
        numChildNodes = childNodes.length,
        nodeIndex = 0,
        index;

    for (var i = 0; i < numChildNodes; i++) {
      if(childNodes[i].nodeType !== 1) {
        continue;
      }

      if(childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }



    if(index >= 0) {
      // open PhotoSwipe if valid index found
      openPhotoSwipe( index, clickedGallery );
    }
    return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function() {
    var hash = window.location.hash.substring(1),
        params = {};

    if(hash.length < 5) {
      return params;
    }

    var vars = hash.split('&');
    for (var i = 0; i < vars.length; i++) {
      if(!vars[i]) {
        continue;
      }
      var pair = vars[i].split('=');
      if(pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }

    if(params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    return params;
  };

  var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
    var pswpElement = document.querySelectorAll('.pswp')[0],
        gallery,
        options,
        items;

    items = parseThumbnailElements(galleryElement);

    // define options (if needed)
    options = {

      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),

      getThumbBoundsFn: function(index) {
        // See Options -> getThumbBoundsFn section of documentation for more info
        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
            rect = thumbnail.getBoundingClientRect();

        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
      }

    };

    // PhotoSwipe opened from URL
    if(fromURL) {
      if(options.galleryPIDs) {
        // parse real index when custom PIDs are used
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for(var j = 0; j < items.length; j++) {
          if(items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        // in URL indexes start from 1
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }

    // exit if index not found
    if( isNaN(options.index) ) {
      return;
    }

    if(disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  // loop through all gallery elements and bind events
  var galleryElements = document.querySelectorAll( gallerySelector );

  for(var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute('data-pswp-uid', i+1);
    galleryElements[i].onclick = onThumbnailsClick;
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if(hashData.pid && hashData.gid) {
    openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
  }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');
