// pages/index_sell_detail_category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      {
        "id": "1",
        "name": "原木",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      },
      {
        "id": "2",
        "name": "锯材",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      },
      {
        "id": "3",
        "name": "木皮",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      },
      {
        "id": "4",
        "name": "人造板",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      },
      {
        "id": "5",
        "name": "木制品",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      }
    ],
    categoryChildren: [],
    showChild: false,
    selected: false
  },
  show: function(e){
    this.data.categoryChildren = [
      {
        "id": "10101",
        "name": "杨木",
        "parent_id": "10",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 0,
          "required_max_thickness": 0,
          "required_min_diameter": 1,
          "required_max_diameter": 1,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      },
      {
        "id": "10102",
        "name": "杉木",
        "parent_id": "10",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      },
      {
        "id": "10103",
        "name": "松木",
        "parent_id": "10",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      },
      {
        "id": "10104",
        "name": "柏木",
        "parent_id": "10",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      },
      {
        "id": "10105",
        "name": "落叶松",
        "parent_id": "10",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 2
        }
      },
      {
        "id": "10106",
        "name": "榆木",
        "parent_id": "10",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      },
      {
        "id": "10107",
        "name": "椿木",
        "parent_id": "10",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      },
      {
        "id": "10108",
        "name": "枫木",
        "parent_id": "10",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      },
      {
        "id": "10109",
        "name": "楠木",
        "parent_id": "10",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      },
      {
        "id": "10110",
        "name": "樟子松",
        "parent_id": "10",
        "keywords": null,
        "description": null,
        "initial_data": {
          "required_min_length": 1,
          "required_max_length": 1,
          "required_min_width": 1,
          "required_max_width": 1,
          "required_min_thickness": 1,
          "required_max_thickness": 1,
          "required_min_diameter": 0,
          "required_max_diameter": 0,
          "init_min_length": "",
          "init_max_length": "",
          "init_min_width": "",
          "init_max_width": "",
          "init_min_thickness": "",
          "init_max_thickness": "",
          "init_min_diameter": "",
          "init_max_diameter": "",
          "init_unit": 1
        }
      }
    ];
    var that = this;
    this.setData({
      showChild: (!that.data.showChild),
      categoryChildren: (that.data.categoryChildren)
    })
  },
  // selectedChild: function(e){
  //   var that = this;
  //   var ids = e.currentTarget.dataset.id;  //获取自定义的id  
  //   var item = this.data.categoryChildren[ids];
  //   if (item.isSelected){
  //     item.isSelected = (!item.isSelected);
  //   }else{
  //     item.isSelected = true;
  //   }
  //   console.log(this.data.categoryChildren);
  //   this.setData({
  //     category_children: (that.data.categoryChildren)
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data);
    // var that = this;
    // this.setData({
    this.data.category=[
        {
          "id": "1",
          "name": "原木",
          "keywords": null,
          "description": null,
          "initial_data": {
            "required_min_length": 1,
            "required_max_length": 1,
            "required_min_width": 1,
            "required_max_width": 1,
            "required_min_thickness": 1,
            "required_max_thickness": 1,
            "required_min_diameter": 0,
            "required_max_diameter": 0,
            "init_min_length": "",
            "init_max_length": "",
            "init_min_width": "",
            "init_max_width": "",
            "init_min_thickness": "",
            "init_max_thickness": "",
            "init_min_diameter": "",
            "init_max_diameter": "",
            "init_unit": 1
          }
        },
        {
          "id": "2",
          "name": "锯材",
          "keywords": null,
          "description": null,
          "initial_data": {
            "required_min_length": 1,
            "required_max_length": 1,
            "required_min_width": 1,
            "required_max_width": 1,
            "required_min_thickness": 1,
            "required_max_thickness": 1,
            "required_min_diameter": 0,
            "required_max_diameter": 0,
            "init_min_length": "",
            "init_max_length": "",
            "init_min_width": "",
            "init_max_width": "",
            "init_min_thickness": "",
            "init_max_thickness": "",
            "init_min_diameter": "",
            "init_max_diameter": "",
            "init_unit": 1
          }
        },
        {
          "id": "3",
          "name": "木皮",
          "keywords": null,
          "description": null,
          "initial_data": {
            "required_min_length": 1,
            "required_max_length": 1,
            "required_min_width": 1,
            "required_max_width": 1,
            "required_min_thickness": 1,
            "required_max_thickness": 1,
            "required_min_diameter": 0,
            "required_max_diameter": 0,
            "init_min_length": "",
            "init_max_length": "",
            "init_min_width": "",
            "init_max_width": "",
            "init_min_thickness": "",
            "init_max_thickness": "",
            "init_min_diameter": "",
            "init_max_diameter": "",
            "init_unit": 1
          }
        },
        {
          "id": "4",
          "name": "人造板",
          "keywords": null,
          "description": null,
          "initial_data": {
            "required_min_length": 1,
            "required_max_length": 1,
            "required_min_width": 1,
            "required_max_width": 1,
            "required_min_thickness": 1,
            "required_max_thickness": 1,
            "required_min_diameter": 0,
            "required_max_diameter": 0,
            "init_min_length": "",
            "init_max_length": "",
            "init_min_width": "",
            "init_max_width": "",
            "init_min_thickness": "",
            "init_max_thickness": "",
            "init_min_diameter": "",
            "init_max_diameter": "",
            "init_unit": 1
          }
        },
        {
          "id": "5",
          "name": "木制品",
          "keywords": null,
          "description": null,
          "initial_data": {
            "required_min_length": 1,
            "required_max_length": 1,
            "required_min_width": 1,
            "required_max_width": 1,
            "required_min_thickness": 1,
            "required_max_thickness": 1,
            "required_min_diameter": 0,
            "required_max_diameter": 0,
            "init_min_length": "",
            "init_max_length": "",
            "init_min_width": "",
            "init_max_width": "",
            "init_min_thickness": "",
            "init_max_thickness": "",
            "init_min_diameter": "",
            "init_max_diameter": "",
            "init_unit": 1
          }
        }
      ]
    // })
    console.log(this.data.category);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})