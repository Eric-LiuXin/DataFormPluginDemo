// Z-Tree 销售架构
$(document).ready(function () { //初始化树    
    zTree = $.fn.zTree.init($("#k_tree"), setting, datas);
});

//设置
var setting = {
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        // 点击文字时选中CheckBox
        callback: {
            onClick: function (e, treeId, treeNode, clickFlag) {
                zTree.checkNode(treeNode, !treeNode.checked, true);
            }
        },
        // 不显示图标
        view: {
            showIcon: false 
        }
    },
    zTree;

// 数据
var datas = [{ id: 1, pId: 0, name: "销售架构 1", open: true }, { id: 11, pId: 1, name: "销售架构 1-1", open: true }, { id: 111, pId: 11, name: "销售架构 1-1-1" }, { id: 112, pId: 11, name: "销售架构 1-1-2" }, { id: 12, pId: 1, name: "销售架构 1-2", open: true }, { id: 121, pId: 12, name: "销售架构 1-2-1" }, { id: 122, pId: 12, name: "销售架构 1-2-2" }, { id: 2, pId: 0, name: "销售架构 2", open: true }, { id: 21, pId: 2, name: "销售架构 2-1" }, { id: 22, pId: 2, name: "销售架构 2-2", open: true }, { id: 221, pId: 22, name: "销售架构 2-2-1" }, { id: 222, pId: 22, name: "销售架构 2-2-2" }, { id: 23, pId: 2, name: "销售架构 2-3" }];

// 父子联动选中
function setCheck() {
    zTree.setting.check.chkboxType = {
        "Y": "ps",
        "N": "ps"
    };
}