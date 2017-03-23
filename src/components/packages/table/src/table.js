export default {
    name: "BtTable",
    render: function(createElement) {
        this.createElement = createElement;
        let tableObject = {};
        tableObject.class = {
            'table': true,
            'table-striped': true,
            'table-hover': true
        };
        let tableElement = [];
        tableElement = tableElement.concat(this.createElementThead(), this.createElementTbody());

        return createElement(
            'table',
            tableObject,
            tableElement
        );
    },
    data() {
        return {
            createElement() {},
        }
    },
    props: {
        tableData: {
            type: Array,
            default () {
                return [];
            }
        },
        tableHeaderData: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    methods: {
        createElementThead() {
            if (this.tableHeaderData.length) {
                return this.createElement('thead', this.tableHeaderData.map(item => {
                    return this.createElement("tr", this.createElementTrTag("th", item));
                }));
            }
            return [];
        },
        createElementTbody() {
            return this.createElement('tbody', this.createElementTrTd());
        },
        createElementTrTd() {
            if (this.tableData.length) {
                return this.tableData.map(item => {
                    return this.createElement("tr", this.createElementTrTag("td", item));
                });
            } else {
                return [this.createElement("tr", this.createElementTrTagNull())];
            }
        },
        createElementTrTagNull() {
            let tdObject = {};
            tdObject.attrs = {
                'colspan': this.tableHeaderData.length
            };
            return [this.createElement("td", tdObject, "没有数据")];
        },
        createElementTrTag(tag, data) {
            return Object.values(data).map(item => {
                if (typeof(item) == "object") {
                    if (item.tag) {
                        let tdObject = {};
                        tdObject.props = item.props;
                        return this.createElement(tag, [this.createElement(item.tag, tdObject)]);
                    }else{
                        let tdObject = {};
                        tdObject.attrs = item.attrs;
                        return this.createElement(tag,tdObject,item.text);
                    }
                } else {
                    return this.createElement(tag, item);
                }
            });
        }
    },
}
