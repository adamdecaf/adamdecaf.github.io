(function() {
  var albums = [
    // Each album contains
    // parent (html element ref), images
    //
    // Each image contains the following properties
    // required: caption, url
    // optional: data-size, portrait (boolean)
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
        {
          url: "/photos/2016/IMG_20161006_175555_01.jpg",
          'data-size': '800x290',
        },
        {
          url: "/photos/2016/IMG_20161006_175558_01.jpg",
          'data-size': '480x360',
        },
        {
          url: "/photos/2016/IMG_20161006_175601_01.jpg",
          'data-size': '480x360',
        },
        {
          url: "/photos/2016/IMG_20161006_175602_01.jpg",
          'data-size': '480x360',
        },
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
