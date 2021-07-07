import React, { useState } from "react";
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux';

const ListViewPage = (props) => {
    const { universalQuestions, individualQuestions } = props;

    const TableHeader = () => {
        return (
            <Table.Header>
                <Table.Row>
                    {Object.keys(universalQuestions[0]).map((header) => {
                        return <Table.HeaderCell>{header}</Table.HeaderCell>
                    })}
                </Table.Row>
            </Table.Header>
        )
    }
    // TODO: add individual questions table

    return (
        <>
            {universalQuestions[0] &&
                (<Table celled>
                    <TableHeader />

                    <Table.Body>
                        {universalQuestions.map((questionObj) => {
                            return (
                                <Table.Row>
                                    {Object.values(questionObj).map((value) => {
                                        return (<Table.Cell>{value}</Table.Cell>)
                                    })}
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>)
            }
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        universalQuestions: state.questions.universalQuestions,
        individualQuestions: state.questions.individualQuestions,
    };
};
export default connect(mapStateToProps)(ListViewPage);