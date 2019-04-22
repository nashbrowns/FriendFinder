var friendArray = [
    {
      "name":"Betsy",
      "photo":"https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_1229%2Cy_0%2Cw_2712%2Ch_3616%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5b7ac48b4db3d70020c01c13%252Fshutterstock_1081879181.jpg",
      "scores":[
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
        ]
    },
    {
        "name":"Frank",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30Wv9j7PXYGutGE21RFCREs4I9_Wn12p7K9npOk2JYV9XS9Ng",
        "scores":[
            2,
            5,
            4,
            2,
            2,
            2,
            2,
            2,
            2,
            1
          ]
      },
      {
        "name":"Frank's twin",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30Wv9j7PXYGutGE21RFCREs4I9_Wn12p7K9npOk2JYV9XS9Ng",
        "scores":[
            2,
            5,
            4,
            2,
            2,
            2,
            2,
            2,
            2,
            1
          ]
      },
      {
        "name":"Doug",
        "photo":"data:image/jpeg;base64,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",
        "scores":[
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ]
      },
      {
        "name":"Mittens",
        "photo":"https://i.imgur.com/00jcTpf.jpg",
        "scores":[
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ]
      },
      {
        "name":"Rex",
        "photo":"http://41.media.tumblr.com/076e8266e7224f228c9260f6d4db7351/tumblr_nox2ttRqbn1usp1v3o1_1280.jpg",
        "scores":[
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
          ]
      },
      {
        "name":"Matilda",
        "photo":"http://www.easypetmd.com/sites/default/files/Miniature%20Poodle%20(6).jpg",
        "scores":[
            2,
            1,
            2,
            3,
            2,
            3,
            2,
            1,
            1,
            3
          ]
      },

      
        
  ];

  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;