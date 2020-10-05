import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class CompanyCard extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="mb-3 border-bottom">Hamee</Card.Title>
          <Card.Subtitle className="mb-3 text-muted">
            1週間(9/7~9/11)
          </Card.Subtitle>
          <Card.Text style={{ fontSize: "0.7em" }}>
            自社サービスの拡張機能、商品検索APIの実装、フロントリファクタリング
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
          <Button variant="success">記事詳細へ</Button>
        </Card.Body>
      </Card>
    );
  }
}
export default CompanyCard;