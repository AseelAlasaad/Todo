import React, { useContext } from 'react';
import { SettingContext } from '../../context/Settings';
import { FormGroup, Card, Elevation, InputGroup } from "@blueprintjs/core";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function UpdateSetting() {
    const context = useContext(SettingContext)
    function updateNum(e) {
        context.setPagination(e.target.value);
        localStorage.setItem('ItemPerpage', e.target.value);

    }
       function sortItem(e){
           context.setSortBy(e.target.value);
           localStorage.setItem('SortBy',e.target.value);
       }

       function setShowCompleted(e) {
        context.setHide(e.target.value);
        localStorage.setItem("showCompleted", e.target.value)
    }
    return (
        <div >


            {/* <Card interactive={true} elevation={Elevation.TWO}>
                        <form>

                            <h5>Update Number of item perPage</h5>
                            <FormGroup  >
                                <InputGroup type="text" onChange={updateNum} />
                            </FormGroup>
                        </form>
                    </Card> */}

                    <Container className="mx-auto mt-5">
                        <Form>
                        <Form.Group>
                                <Form.Label className="mb-0">Items per Page</Form.Label>
                                <Form.Control as="select" defaultValue={localStorage.getItem("ItemPerpage")} onChange={e => updateNum(e)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Control>
                            </Form.Group>
               
                            <Form.Group>
                                <Form.Label className="mt-2 mb-0">Sort By</Form.Label>
                              
                                <Form.Control as="select" defaultValue={localStorage.getItem("SortBy")} onChange={e => sortItem(e)}>
                                    <option value="Easiest">Easiest</option>
                                    <option value="Hardest">Hardest</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mt-2 mb-0">Completed Items</Form.Label>
                                <Form.Control as="select" defaultValue={localStorage.getItem("showCompleted")} onChange={e => setShowCompleted(e)}>
                                    <option value="true">show</option>
                                    <option value="false">hide</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Container>

        </div>
    )
}

export default UpdateSetting;