import React, { Component } from 'react';
import Select from 'react-select';

const serviceOptions = [
    {
        value: '1',
        label: 'Cloud Server'
    }, {
        value: '2',
        label: 'Cloud Solutions'
    }, {
        value: '3',
        label: 'Database'
    },
    {
        value: '4',
        label: 'Development'
    },
    {
        value: '5',
        label: 'Operating System'
    },
    {
        value: '6',
        label: 'Security'
    }
  ];
  const favouriteExpertOptions = [
      {
          value: '1',
          label: 'Harry Callum'
      }, {
          value: '2',
          label: 'Expert Naeem'
      }, {
          value: '3',
          label: 'Sufyan Ali'
      },
      {
          value: '4',
          label: 'Abu Huraira'
      },
      {
          value: '5',   
          label: 'Expert Ali'
      },
      {
          value: '6',
          label: 'Expert Amir'
      }
    ];
    const categoryOptions = [
      ];
class PostATicket extends Component {
    state = {
        chooseServiceType: null,
        chooseFavouriteExpert:null,
        chooseCategory:null,

      };
      handleChange = chooseServiceType => {
        this.setState({ chooseServiceType });
        console.log(`Option selected:`, chooseServiceType);
      };
      handleChangefavourite = chooseFavouriteExpert => {
        this.setState({ chooseFavouriteExpert });
        console.log(`Option selected:`, chooseFavouriteExpert);
      };
      handleChangeCategory = chooseCategory => {
        this.setState({ chooseCategory });
        console.log(`Option selected:`, chooseCategory);
      };
    render() {
        const { chooseServiceType,chooseFavouriteExpert,chooseCategory } = this.state;
        return (
            <div>
                <h2 className="post-ticket__input-title frm______a" style={{marginTop:"60px"}} id="category_">
                    Choose Service Type:
                </h2>
                <p className="post-ticket__subtitle frm______a">
                    Select appropriate service type that fits your project
                </p>
                <label className="input__wrapper  mb-4 mb-md-4 frm______a">
                    <div className="dropdown">
                    <Select
                        closeMenuOnSelect={true}
                        value={chooseServiceType}
                        onChange={this.handleChange}
                        options={serviceOptions}
                        className="multi-select-input-style"
                    />
                    </div>
                    <p className="input__notification">Category is required</p>
                </label>



                <h2 className="post-ticket__input-title frm______a" id="vender_">
                    Category:
                </h2>
                <p className="post-ticket__subtitle frm______a">
                    Select appropriate service type that fits your project
                </p>
                <label className="input__wrapper  mb-4 mb-md-4 frm______a">

                    <div className="dropdown">
                        <Select
                        value={chooseCategory}
                        onChange={this.handleChangeCategory}
                        options={categoryOptions}
                        className="multi-select-input-style"
                    />
                    </div>
                    <p className="input__notification">Category is required</p>
                </label>



                <h2 className="post-ticket__input-title frm______a">
                    Select Skills:
                </h2>
                <p className="post-ticket__subtitle frm______a">
                    Select appropriate Skills that fits your project
                </p>
                <label className="input__wrapper  mb-4 mb-md-4 frm______a">
                    <div className="dropdown" tabIndex={0}>
                    <Select
                        value={chooseCategory}
                        onChange={this.handleChangeCategory}
                        options={categoryOptions}
                        placeholder=""
                        className="multi-select-input-style"
                    />
                    </div>

                    <p className="input__notification frm______a">Category is required</p>
                </label>
                <h2 className="post-ticket__input-title frm______a">
                    Want to assign this project to a Favourite Expert?

                </h2>
                <p className="post-ticket__subtitle frm______a">
                    If you already know who do you want to assign this project to, just select from the drop
                    down
                </p>

                <label className="input__wrapper mb-5 frm______a">
                    <div className="dropdown " tabIndex={0}>
                    <Select
                        value={chooseFavouriteExpert}
                        onChange={this.handleChangefavourite}
                        options={favouriteExpertOptions}
                        placeholder="No one for this project"
                        className="multi-select-input-style"
                    />
                    </div>
                    <p className="input__notification">Category is required</p>
                </label>
            </div>
        );
    }
}

export default PostATicket;